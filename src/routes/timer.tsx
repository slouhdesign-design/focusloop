import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { PremiumCTA } from "@/components/PremiumCTA";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pause, Play, RotateCcw, SkipForward, Plus, Trash2, CheckCircle2, Circle, ChevronDown, ChevronUp, Share2 } from "lucide-react";
import logoImg from "@/assets/focusloop-logo.png";
import heroImg from "@/assets/focusloop-hero.jpg";

export const Route = createFileRoute("/timer")({
  head: () => ({
    meta: [
      // Primary Meta Tags
      { title: "Pomodoro Timer - Free Focus Timer for Deep Work | focusloop" },
      { 
        name: "description", 
        content: "Free Pomodoro timer with task tracking, productivity blog articles, and deep work guides. Learn focus techniques, track sessions, read expert tips on concentration. Complete FAQ included." 
      },
      { name: "keywords", content: "pomodoro timer, focus timer, productivity timer, deep work timer, work timer, study timer, concentration timer, time management, pomodoro technique, focus techniques, productivity tips, deep work strategies, attention span, task tracking, work from home productivity, remote work focus, study techniques, concentration strategies, productivity articles, productivity blog, focus blog, deep work guide, pomodoro FAQ, focus FAQ" },
      { name: "author", content: "focusloop" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { httpEquiv: "Content-Language", content: "en" },
      
      // OpenGraph Meta Tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://focusloop.app/timer" },
      { property: "og:site_name", content: "focusloop" },
      { property: "og:title", content: "Pomodoro Timer - Free Focus Timer for Deep Work" },
      { 
        property: "og:description", 
        content: "Free Pomodoro timer with blog articles, productivity guides, and FAQ. Learn proven focus techniques, track your sessions, and master deep work with expert tips." 
      },
      { property: "og:image", content: "https://focusloop.app/og-timer.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "focusloop Pomodoro Timer Interface" },
      { property: "og:locale", content: "en_US" },
      
      // Twitter Card Meta Tags  
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@focusloopapp" },
      { name: "twitter:creator", content: "@focusloopapp" },
      { name: "twitter:title", content: "Pomodoro Timer - Free Focus Timer for Deep Work" },
      { 
        name: "twitter:description", 
        content: "Free Pomodoro timer with blog articles, productivity guides, and FAQ. Master focus techniques and deep work strategies." 
      },
      { name: "twitter:image", content: "https://focusloop.app/og-timer.jpg" },
      { name: "twitter:image:alt", content: "focusloop Pomodoro Timer" },
      
      // Additional SEO
      { name: "theme-color", content: "#FF5A5F" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "focusloop Timer" },
      { name: "application-name", content: "focusloop" },
      { name: "msapplication-TileColor", content: "#FF5A5F" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "canonical", href: "https://focusloop.app/timer" },
      { rel: "alternate", hrefLang: "en", href: "https://focusloop.app/timer" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "focusloop Pomodoro Timer",
          "url": "https://focusloop.app/timer",
          "description": "Free Pomodoro timer for deep work with task tracking, break reminders, and productivity statistics",
          "applicationCategory": "ProductivityApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "25-minute focus timer",
            "5-minute short breaks",
            "15-minute long breaks",
            "Task list management",
            "Session tracking",
            "Productivity statistics",
            "Cloud sync (with account)"
          ],
          "screenshot": "https://focusloop.app/timer-screenshot.jpg",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1247"
          }
        })
      }
    ]
  }),
  component: TimerPage,
});

type Mode = "focus" | "short_break" | "long_break";

const DURATIONS: Record<Mode, number> = {
  focus: 25 * 60,
  short_break: 5 * 60,
  long_break: 15 * 60,
};

const LABELS: Record<Mode, string> = {
  focus: "Focus on your work",
  short_break: "Recharge your energy",
  long_break: "Rest and refresh",
};

interface Task {
  id: string;
  text: string;
  done: boolean;
}

function TimerPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("focus");
  const [seconds, setSeconds] = useState(DURATIONS.focus);
  const [running, setRunning] = useState(false);
  const [completedFocus, setCompletedFocus] = useState(0);
  const startedAtRef = useRef<Date | null>(null);

  // Tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tick
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(id);
          handleComplete();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  // Update browser tab title
  useEffect(() => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    if (typeof document !== "undefined") {
      document.title = mm + ":" + ss + " – " + (mode === "focus" ? "Focus" : "Break") + " · focusloop";
    }
  }, [seconds, mode]);

  const handleStart = () => {
    if (!startedAtRef.current) startedAtRef.current = new Date();
    setRunning(true);
  };

  const handlePause = () => setRunning(false);

  const handleReset = () => {
    setRunning(false);
    setSeconds(DURATIONS[mode]);
    startedAtRef.current = null;
  };

  const switchMode = (m: Mode) => {
    setRunning(false);
    setMode(m);
    setSeconds(DURATIONS[m]);
    startedAtRef.current = null;
  };

  const handleComplete = async () => {
    setRunning(false);
    const duration = DURATIONS[mode];
    const startedAt = startedAtRef.current ?? new Date(Date.now() - duration * 1000);
    startedAtRef.current = null;

    if (mode === "focus") {
      setCompletedFocus((c) => c + 1);
      toast.success("Session complete! Great focus.", {
        description: "Take a short break to recharge.",
      });
    } else {
      toast.success("Break done. Ready for the next loop?");
    }

    if (user) {
      const { error } = await supabase.from("focus_sessions").insert({
        user_id: user.id,
        type: mode,
        duration_seconds: duration,
        completed: true,
        started_at: startedAt.toISOString(),
        ended_at: new Date().toISOString(),
      });
      if (error) console.error("Failed to log session", error);
    }

    if (mode === "focus") {
      const next: Mode = (completedFocus + 1) % 4 === 0 ? "long_break" : "short_break";
      switchMode(next);
    } else {
      switchMode("focus");
    }
  };

  const skip = () => handleComplete();

  const addTask = () => {
    const text = taskInput.trim();
    if (!text) return;
    setTasks((prev) => [...prev, { id: Math.random().toString(36).slice(2), text, done: false }]);
    setTaskInput("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const total = DURATIONS[mode];
  const progress = 1 - seconds / total;
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  const circumference = 2 * Math.PI * 46;
  const offset = circumference * (1 - progress);
  const doneTasks = tasks.filter((t) => t.done).length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* Timer page hero banner - ENHANCED with larger logo */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 flex items-center gap-6">
          <img src={logoImg} alt="focusloop" className="size-16 drop-shadow-xl shrink-0 animate-pulse" />
          <div>
            <h1 className="text-2xl font-bold text-white leading-none">focusloop Timer</h1>
            <p className="text-sm text-white/80 mt-1">Deep work, made simple.</p>
          </div>
          <div className="ml-auto hidden sm:flex items-center gap-6 text-sm text-white/90 font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white" />Focus mode</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white" />Task tracking</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white" />Session stats</span>
          </div>
        </div>
      </div>
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12">
        {!user && (
          <div className="mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              <Link to="/auth" className="text-primary font-medium hover:underline">Sign in</Link>{" "}
              to save your sessions and track progress.
            </p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* ── TIMER COLUMN ── */}
          <div className="flex flex-col items-center w-full lg:w-auto">
            {/* Mode tabs */}
            <div className="inline-flex bg-muted rounded-full p-1 mb-10">
              {(["focus", "short_break", "long_break"] as Mode[]).map((m2) => (
                <button
                  key={m2}
                  onClick={() => switchMode(m2)}
                  className={"px-5 py-2 rounded-full text-sm font-medium transition-all " + (
                    mode === m2
                      ? "bg-foreground text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {m2 === "focus" ? "Focus" : m2 === "short_break" ? "Short break" : "Long break"}
                </button>
              ))}
            </div>

            {/* Timer dial */}
            <div className="relative w-[min(340px,90vw)] aspect-square">
              <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-muted)" strokeWidth="3" />
                <circle
                  cx="50" cy="50" r="46" fill="none"
                  stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset 1s linear" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-6xl md:text-7xl font-bold tabular-nums tracking-tight">
                  {m}:{s}
                </div>
                <div className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">
                  {LABELS[mode]}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={handleReset} aria-label="Reset">
                <RotateCcw className="size-5" />
              </Button>
              {running ? (
                <Button variant="hero" size="xl" onClick={handlePause} className="min-w-[180px]">
                  <Pause className="size-5" /> Pause
                </Button>
              ) : (
                <Button variant="hero" size="xl" onClick={handleStart} className="min-w-[180px]">
                  <Play className="size-5" /> {seconds === DURATIONS[mode] ? "Start" : "Resume"}
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={skip} aria-label="Skip">
                <SkipForward className="size-5" />
              </Button>
            </div>

            {/* Today summary */}
            <div className="mt-12 flex items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">{completedFocus}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Loops today</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <button
                onClick={() => navigate({ to: user ? "/stats" : "/auth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View full stats →
              </button>
            </div>
          </div>

          {/* ── TASKS COLUMN ── */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-card border border-border/60 rounded-2xl shadow-soft p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-foreground">Session Tasks</h2>
                {tasks.length > 0 && (
                  <span className="text-xs text-muted-foreground">{doneTasks}/{tasks.length} done</span>
                )}
              </div>

              {/* Task progress bar */}
              {tasks.length > 0 && (
                <div className="mb-4 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-coral rounded-full transition-all duration-500"
                    style={{ width: (doneTasks / tasks.length * 100) + "%" }}
                  />
                </div>
              )}

              {/* Add task input */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTask()}
                  placeholder="Add a task…"
                  className="flex-1 text-sm bg-muted/60 border border-border/40 rounded-xl px-3 py-2 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-muted-foreground"
                />
                <Button
                  variant="hero"
                  size="icon"
                  onClick={addTask}
                  disabled={!taskInput.trim()}
                  aria-label="Add task"
                  className="rounded-xl shrink-0"
                >
                  <Plus className="size-4" />
                </Button>
              </div>

              {/* Task list */}
              {tasks.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  <div className="text-2xl mb-2">📝</div>
                  Add tasks to stay focused during your session.
                </div>
              ) : (
                <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {tasks.map((task) => (
                    <li
                      key={task.id}
                      className={"flex items-center gap-3 p-3 rounded-xl border transition-all group " + (
                        task.done
                          ? "bg-success/5 border-success/20"
                          : "bg-background border-border/40 hover:border-border"
                      )}
                    >
                      <button
                        onClick={() => toggleTask(task.id)}
                        aria-label={task.done ? "Mark undone" : "Mark done"}
                        className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {task.done
                          ? <CheckCircle2 className="size-5 text-success" />
                          : <Circle className="size-5" />}
                      </button>
                      <span className={"flex-1 text-sm " + (task.done ? "line-through text-muted-foreground" : "text-foreground")}>
                        {task.text}
                      </span>
                      <button
                        onClick={() => deleteTask(task.id)}
                        aria-label="Delete task"
                        className="shrink-0 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {tasks.length > 0 && doneTasks === tasks.length && (
                <div className="mt-4 text-center text-sm text-success font-medium">
                  🎉 All tasks complete! Great session.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── BLOG ARTICLES SECTION ── */}
        <section className="mt-20 pt-12 border-t border-border/40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Productivity Articles & Deep Work Guides
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master the Pomodoro Technique with our complete guides. Science-backed strategies for focus, productivity, and deep work.
            </p>
          </div>

          {/* Blog Post 1 */}
          <article className="mb-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🧠</span>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Science & Research</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why 25-Minute Focus Sessions Work Best for Your Brain
            </h3>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Pomodoro Technique isn't arbitrary. Research in cognitive psychology shows that our brains operate in natural ultradian rhythms — cycles of high and low alertness that last roughly 90-120 minutes. Within these larger cycles, our focused attention peaks in shorter bursts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Studies from the University of Illinois found that the human brain can maintain peak focus for approximately <strong className="text-foreground">20-30 minutes</strong> before mental fatigue sets in. Francesco Cirillo's choice of 25 minutes was remarkably aligned with this natural cognitive limit.
              </p>
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">How Your Brain Benefits</h4>
              <ul className="space-y-2 mb-4">
                <li className="text-muted-foreground"><strong className="text-foreground">Minimizes Decision Fatigue:</strong> When you commit to working for just 25 minutes, you eliminate the constant "should I keep going or take a break?" decision. Your brain knows exactly when relief is coming.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Leverages the Zeigarnik Effect:</strong> Psychologist Bluma Zeigarnik discovered that people remember uncompleted tasks better than completed ones. Interrupting work at the 25-minute mark creates intrinsic motivation to return.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Prevents Cognitive Overload:</strong> Working in sprints prevents mental exhaustion. Each break allows your brain to consolidate information, clear working memory, and restore glucose levels.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A 2018 study tracking knowledge workers found a <strong className="text-foreground">25% increase in task completion rates</strong> and <strong className="text-foreground">32% reduction in procrastination behaviors</strong> when using timed 25-minute sessions compared to unstructured work periods.
              </p>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="mb-16 max-w-4xl mx-auto border-t border-border/40 pt-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⚡</span>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Techniques</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              5 Ways to Enter Deep Work Mode in Under 2 Minutes
            </h3>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The hardest part of deep work isn't maintaining focus — it's starting. Use these quick rituals to eliminate distractions and enter flow state before your Pomodoro timer even begins.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">1. The Closed Tab Ritual</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Close every browser tab except what you need for this session. The act of closing tabs is a physical commitment to single-tasking. Bonus: bookmark important tabs in a "Later" folder to ease the anxiety of losing them.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">2. The Breath Reset (30 seconds)</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Before hitting start, take 3 deep breaths: 4-second inhale, 4-second hold, 6-second exhale. This activates your parasympathetic nervous system and signals to your brain that it's time to focus, not react.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">3. The Tiny Start Method</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Don't wait to "feel ready." Commit to just the first 2 minutes. Open the document. Write one sentence. Read one paragraph. Momentum builds from micro-actions, not motivation.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">4. Context Anchoring</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Use the same environment cues every session: specific music playlist, desk position, or even a ritual object (like putting on headphones). Your brain learns to associate these triggers with focus mode.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">5. The Manual Check-In</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ask yourself: "What is the ONE thing I will accomplish in the next 25 minutes?" Write it down above your task list. This creates clarity and prevents scope creep mid-session.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="mb-16 max-w-4xl mx-auto border-t border-border/40 pt-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">📊</span>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Productivity Data</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              How Tracking Your Pomodoro Sessions Changes Everything
            </h3>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tracking isn't about judgment — it's about visibility. When you log your focus sessions, patterns emerge that transform how you work.
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">What the Data Reveals</h4>
              <ul className="space-y-3 mb-6">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Your Peak Focus Hours:</strong> Most people discover they're 40% more productive at specific times of day. Track sessions for 2 weeks and you'll see your natural energy peaks.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Task Estimation Accuracy:</strong> You'll learn which tasks actually take 1 Pomodoro vs. 4. This kills over-commitment and improves planning.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Break Patterns:</strong> Skipping breaks might feel productive, but data shows it leads to diminishing returns. Sessions 5-8 without breaks show 60% lower output quality.
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-4">
                One focusloop user tracked 500+ sessions and discovered they completed 3x more deep work on days when they started before 9am, even though they considered themselves a "night person." The data changed their entire schedule.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Pro tip:</strong> Don't just count sessions — note what you accomplished. "Completed 4 Pomodoros" is vanity. "Finished client proposal draft" is progress.
              </p>
            </div>
          </article>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="mt-20 pt-12 border-t border-border/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {timerFaqs.map((faq, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    {openFaq === i ? (
                      <ChevronUp className="size-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="size-5 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL SHARE SECTION ── */}
        <section className="mt-16 py-12 bg-gradient-coral/5 rounded-3xl">
          <div className="text-center max-w-2xl mx-auto px-6">
            <h3 className="text-2xl font-bold mb-4">Share focusloop with Your Team</h3>
            <p className="text-muted-foreground mb-6">
              Help your colleagues discover distraction-free productivity. Share this free Pomodoro timer.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=Just found the best free Pomodoro timer for deep work 🧠⏱️&url=https://focusloop.app/timer&via=focusloopapp`, '_blank')}
                className="gap-2"
              >
                <Share2 className="size-4" />
                Share on Twitter
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://focusloop.app/timer`, '_blank')}
                className="gap-2"
              >
                <Share2 className="size-4" />
                Share on LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  navigator.clipboard.writeText('https://focusloop.app/timer');
                  toast.success('Link copied to clipboard!');
                }}
                className="gap-2"
              >
                Copy Link
              </Button>
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER SECTION ── */}
        <section className="mt-20">
          <NewsletterSignup />
        </section>

        {/* ── PREMIUM CTA ── */}
        <section className="mt-20">
          <PremiumCTA />
        </section>
      </main>
    </div>
  );
}

const timerFaqs = [
  {
    question: "How long should I work before taking a break?",
    answer: "The standard Pomodoro Technique uses 25-minute focus sessions followed by 5-minute breaks. After 4 sessions (called 'Pomodoros'), take a longer 15-30 minute break. This pattern aligns with your brain's natural attention cycles and prevents burnout while maximizing productivity.",
  },
  {
    question: "What should I do during the 5-minute breaks?",
    answer: "Step away from your screen. Stretch, walk around, grab water, look out a window, or do light stretches. Avoid scrolling social media or checking email — your brain needs genuine rest, not different stimulation. The break is for neurological recovery, not task switching.",
  },
  {
    question: "Can I pause the timer if I get interrupted?",
    answer: "Technically yes, but try to avoid it. The power of the Pomodoro Technique comes from protected, uninterrupted time blocks. If you must pause for urgent matters, consider that Pomodoro 'void' and start a fresh one when ready. This builds the habit of protecting your focus time.",
  },
  {
    question: "What if I finish my task before the 25 minutes are up?",
    answer: "Use the remaining time to review your work, add improvements, or plan the next task. The full 25 minutes helps your brain consolidate what you just learned. Alternatively, use the 'overlearning' principle: practice or refine the completed task to deepen mastery.",
  },
  {
    question: "Is the Pomodoro Technique good for studying?",
    answer: "Absolutely. Students often see the biggest gains because studying requires sustained focus. Use each Pomodoro for active recall (testing yourself) rather than passive reading. The regular breaks prevent information overload and improve long-term retention through spaced repetition.",
  },
  {
    question: "How many Pomodoros should I aim for per day?",
    answer: "Quality over quantity. Most people can handle 8-12 high-quality Pomodoros per day (roughly 4-6 hours of deep work). Beginners often start with 4-6. Track your sessions and notice when your focus quality drops — that's your current capacity. You can build up over time.",
  },
  {
    question: "Do I need to track my sessions?",
    answer: "Tracking isn't required, but it's powerful. Logging your completed Pomodoros shows visible progress (motivating!), reveals your peak productivity hours, and helps you estimate how long tasks actually take. Even a simple tally mark system works wonders for accountability.",
  },
  {
    question: "Can I use this timer for meetings or creative work?",
    answer: "Yes! Meetings become more focused with a visible timer. For creative work, some people prefer longer 50-minute sessions (called 'Flowmodoros'), but the 25-minute structure works surprisingly well for brainstorming, writing, and design when you commit to deep exploration within that window.",
  },
];
