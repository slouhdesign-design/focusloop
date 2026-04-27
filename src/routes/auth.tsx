import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/focusloop-hero.jpg";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — focusloop" },
      { name: "description", content: "Sign in or create your focusloop account to track your focus sessions." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate({ to: "/timer" });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/timer`,
            data: { display_name: displayName || email.split("@")[0] },
          },
        });
        if (error) throw error;
        toast.success("Welcome to focusloop!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
      }
      navigate({ to: "/timer" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}/timer`,
      });
      if (result.error) throw result.error;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Sign in failed";
      toast.error(msg);
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* LEFT — hero image panel (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col">
        <img
          src={heroImg}
          alt="A calm desk setup for deep work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-secondary/80" />
        {/* Coral gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col h-full p-10">
          {/* Logo white variant */}
          <Logo size="md" variant="light" />

          {/* Centre brand text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white leading-tight max-w-xs">
              Deep work,<br />
              <span className="text-primary">made simple.</span>
            </h2>
            <p className="mt-4 text-white/70 text-base max-w-xs leading-relaxed">
              A calm, minimal Pomodoro timer for students, creators, and professionals who value focus.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Free Pomodoro timer, always",
                "Session tasks & progress tracking",
                "Focus stats & streaks",
                "No ads, no clutter",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom tagline */}
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} focusloop</p>
        </div>
      </div>

      {/* RIGHT — form panel */}
      <div className="flex-1 flex flex-col">
        <div className="px-6 py-5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
        <main className="flex-1 flex items-center justify-center px-6 pb-12">
          <div className="w-full max-w-md">
            {/* Logo visible only on mobile */}
            <div className="text-center mb-8 lg:hidden">
              <div className="inline-block"><Logo size="lg" /></div>
              <p className="mt-3 text-sm text-muted-foreground">Deep work made simple.</p>
            </div>
            {/* Desktop heading */}
            <div className="hidden lg:block mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {mode === "signin" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-muted-foreground mt-2">
                {mode === "signin" ? "Pick up where you left off." : "Start your first focus loop."}
              </p>
            </div>

            <div className="bg-card rounded-3xl border border-border/60 shadow-soft p-8">
              {/* Mobile heading inside card */}
              <div className="lg:hidden mb-4">
                <h1 className="text-2xl font-bold tracking-tight">
                  {mode === "signin" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {mode === "signin" ? "Pick up where you left off." : "Start your first focus loop."}
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleGoogle}
                disabled={busy}
              >
                <GoogleIcon /> Continue with Google
              </Button>

              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-px flex-1 bg-border" />
                <span>or with email</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "signup" && (
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Your name" />
                  </div>
                )}
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={busy}>
                  {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                {mode === "signin" ? "New to focusloop?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                  className="text-primary font-medium hover:underline"
                >
                  {mode === "signin" ? "Create account" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}
