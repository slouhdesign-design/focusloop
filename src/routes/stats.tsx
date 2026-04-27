import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Flame, Target, Clock, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Your stats — focusloop" },
      { name: "description", content: "Track your focus sessions, weekly progress, and consistency over time." },
    ],
  }),
  component: StatsPage,
});

interface SessionRow {
  id: string;
  type: "focus" | "short_break" | "long_break";
  duration_seconds: number;
  started_at: string;
}

function StatsPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    const since = new Date();
    since.setDate(since.getDate() - 30);
    supabase
      .from("focus_sessions")
      .select("id,type,duration_seconds,started_at")
      .eq("user_id", user.id)
      .gte("started_at", since.toISOString())
      .order("started_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setSessions(data as SessionRow[]);
        setFetching(false);
      });
  }, [user]);

  const focusSessions = sessions.filter((s) => s.type === "focus");
  const totalFocusMin = Math.round(focusSessions.reduce((a, s) => a + s.duration_seconds, 0) / 60);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const todayCount = focusSessions.filter((s) => new Date(s.started_at) >= today).length;
  const streak = computeStreak(focusSessions);

  // Last 7 days
  const week = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i)); d.setHours(0, 0, 0, 0);
    const next = new Date(d); next.setDate(next.getDate() + 1);
    const count = focusSessions.filter((s) => {
      const t = new Date(s.started_at);
      return t >= d && t < next;
    }).length;
    return {
      day: d.toLocaleDateString(undefined, { weekday: "short" }),
      sessions: count,
    };
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">Your stats</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">This week.</h1>
          <p className="text-muted-foreground mt-2">Small consistent actions, big results.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard icon={Target} label="Today" value={String(todayCount)} suffix="loops" />
          <StatCard icon={Flame} label="Streak" value={String(streak)} suffix="days" />
          <StatCard icon={Clock} label="Focus time" value={String(totalFocusMin)} suffix="min · 30d" />
          <StatCard icon={TrendingUp} label="Total loops" value={String(focusSessions.length)} suffix="last 30d" />
        </div>

        <div className="bg-card rounded-3xl border border-border/60 shadow-soft p-6 md:p-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-semibold">Last 7 days</h2>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Focus sessions</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={week} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip
                  cursor={{ fill: "var(--color-muted)" }}
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="sessions" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10 bg-card rounded-3xl border border-border/60 shadow-soft p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">Recent sessions</h2>
          {fetching ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : sessions.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No sessions yet. <Link to="/timer" className="text-primary hover:underline">Start your first focus loop →</Link>
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {sessions.slice(0, 12).map((s) => (
                <li key={s.id} className="py-3 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <span
                      className={`size-2 rounded-full ${
                        s.type === "focus" ? "bg-primary" : s.type === "short_break" ? "bg-accent" : "bg-success"
                      }`}
                    />
                    <span className="font-medium capitalize">{s.type.replace("_", " ")}</span>
                    <span className="text-muted-foreground">· {Math.round(s.duration_seconds / 60)} min</span>
                  </div>
                  <span className="text-muted-foreground tabular-nums">
                    {new Date(s.started_at).toLocaleString(undefined, {
                      month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, suffix }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; suffix: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border/60 shadow-soft p-5">
      <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest">
        <Icon className="size-4 text-primary" />
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-bold tabular-nums">{value}</span>
        <span className="text-xs text-muted-foreground">{suffix}</span>
      </div>
    </div>
  );
}

function computeStreak(focus: SessionRow[]): number {
  if (focus.length === 0) return 0;
  const days = new Set(
    focus.map((s) => {
      const d = new Date(s.started_at);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    }),
  );
  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  // If no session today, allow streak to start from yesterday
  if (!days.has(cursor.getTime())) {
    cursor.setDate(cursor.getDate() - 1);
    if (!days.has(cursor.getTime())) return 0;
  }
  while (days.has(cursor.getTime())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
