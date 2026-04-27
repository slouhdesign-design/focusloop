import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PremiumCTA } from "@/components/PremiumCTA";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useState } from "react";
import {
  Target, Compass, Brain, Leaf, Users, Waves, ArrowRight,
  CheckCircle2, Eye, Scale, TrendingUp, RotateCw, Flag,
  BookOpen, Zap, BarChart2, Clock, Shield, Smile, Layers, Globe, Lightbulb,
  ChevronDown, ChevronUp,
} from "lucide-react";
import heroImg from "@/assets/focusloop-hero.jpg";
import logoImg from "@/assets/focusloop-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Primary Meta Tags
      { title: "focusloop - Calm Pomodoro Timer for Deep Work & Productivity" },
      { 
        name: "description", 
        content: "A peaceful, minimal Pomodoro timer that helps you eliminate distractions, build consistency, and enter deep work effortlessly. Perfect for students, creators, remote workers, and professionals." 
      },
      { name: "keywords", content: "pomodoro timer, deep work, focus timer, productivity app, time management, study timer, work timer, pomodoro technique, concentration, focus app" },
      { name: "author", content: "focusloop" },
      { name: "robots", content: "index, follow" },
      
      // OpenGraph Meta Tags
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://focusloop.app" },
      { property: "og:site_name", content: "focusloop" },
      { property: "og:title", content: "focusloop - Calm Pomodoro Timer for Deep Work" },
      { 
        property: "og:description", 
        content: "A peaceful, minimal Pomodoro timer for students, creators, remote workers, and professionals. Build better focus habits with our distraction-free timer." 
      },
      { property: "og:image", content: "https://focusloop.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      
      // Twitter Card Meta Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@focusloopapp" },
      { name: "twitter:title", content: "focusloop - Calm Pomodoro Timer for Deep Work" },
      { 
        name: "twitter:description", 
        content: "A peaceful, minimal Pomodoro timer that helps you focus, stay consistent, and achieve meaningful work." 
      },
      { name: "twitter:image", content: "https://focusloop.app/og-image.jpg" },
      
      // Additional SEO
      { name: "theme-color", content: "#FF5A5F" },
    ],
    links: [
      { rel: "canonical", href: "https://focusloop.app" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "focusloop",
          "url": "https://focusloop.app",
          "description": "A calm, minimal Pomodoro timer for deep work",
          "applicationCategory": "ProductivityApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1247"
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "focusloop",
          "url": "https://focusloop.app",
          "logo": "https://focusloop.app/logo.png",
          "sameAs": [
            "https://twitter.com/focusloopapp",
            "https://instagram.com/focusloopapp",
            "https://linkedin.com/company/focusloop",
            "https://youtube.com/@focusloop"
          ]
        })
      }
    ]
  }),
  component: Index,
});

const personality = [
  { icon: Target, title: "Calm but Powerful", body: "We create a peaceful environment that fuels your deep focus and productivity." },
  { icon: Compass, title: "Structured but Flexible", body: "Provide structure to your time, yet adapt to your unique work style." },
  { icon: Brain, title: "Minimal but Intelligent", body: "No clutter. Only essential tools, insights, and experiences that move you forward." },
  { icon: Leaf, title: "Anti-Distraction Mindset", body: "Every detail helps you eliminate distractions and enter the deep work state." },
  { icon: Users, title: "Built for Deep Work People", body: "For students, creators, remote workers, and professionals who value focus." },
];

const values = [
  { icon: Target, title: "Focus", body: "We help you focus on what truly matters." },
  { icon: Flag, title: "Discipline", body: "Small consistent actions, big results." },
  { icon: Eye, title: "Clarity", body: "Simple, clear, and easy to use." },
  { icon: RotateCw, title: "Consistency", body: "Build habits. Stay consistent." },
  { icon: Scale, title: "Balance", body: "Work with focus, rest with purpose." },
  { icon: TrendingUp, title: "Growth", body: "Track progress. Become better daily." },
];

const inAction = [
  "Helps you enter deep work state",
  "Simplifies time management",
  "Encourages consistency",
  "Removes distractions",
  "Shows meaningful insights",
  "Respects your time and attention",
];

const articles = [
  {
    icon: BookOpen,
    tag: "Guide",
    title: "The Science Behind the Pomodoro Technique",
    body: "Discover why 25-minute deep work sessions align with your brain's natural attention cycles and how they supercharge productivity.",
    slug: "science-behind-pomodoro",
  },
  {
    icon: Zap,
    tag: "Tips",
    title: "5 Ways to Enter Deep Work in Under 2 Minutes",
    body: "Simple rituals that help you transition from distraction mode to full focus — backed by cognitive science.",
    slug: "enter-deep-work-fast",
  },
  {
    icon: BarChart2,
    tag: "Insights",
    title: "How Tracking Your Focus Sessions Changes Everything",
    body: "When you can see your patterns, you can improve them. Learn how stats build motivation and consistency over time.",
    slug: "tracking-focus-changes-everything",
  },
  {
    icon: Clock,
    tag: "Productivity",
    title: "Why Breaks Are Not Wasted Time",
    body: "Short breaks between sessions restore mental energy and prevent burnout. Your rest is part of the work.",
    slug: null,
  },
  {
    icon: Shield,
    tag: "Mindset",
    title: "Building an Anti-Distraction Environment",
    body: "Your environment shapes your focus. Practical steps to redesign your workspace and digital habits for deep work.",
    slug: null,
  },
  {
    icon: Smile,
    tag: "Habits",
    title: "The Habit Loop: How focusloop Helps You Stay Consistent",
    body: "Consistency beats intensity. See how small daily sessions compound into life-changing results over weeks and months.",
    slug: null,
  },
  {
    icon: Layers,
    tag: "Deep Work",
    title: "Cal Newport's Deep Work Principles Applied Daily",
    body: "Translating high-concept productivity philosophy into a simple, repeatable daily routine you can actually stick to.",
    slug: null,
  },
  {
    icon: Globe,
    tag: "Remote Work",
    title: "How Remote Workers Use focusloop to Stay Structured",
    body: "Without office structure, remote workers thrive using time-boxing. Real stories from the focusloop community.",
    slug: null,
  },
  {
    icon: Lightbulb,
    tag: "Students",
    title: "Study Smarter: Pomodoro for Exam Preparation",
    body: "Students using focused sprints with strategic breaks retain more, stress less, and perform better on exams.",
    slug: null,
  },
];

const faqs = [
  {
    q: "What is focusloop?",
    a: "focusloop is a calm, minimal Pomodoro timer designed to help you enter deep work. It combines a 25-minute focus timer, short and long breaks, task tracking, and session stats — all in a distraction-free interface.",
  },
  {
    q: "What is the Pomodoro Technique?",
    a: "The Pomodoro Technique is a time management method where you work in focused 25-minute intervals (called Pomodoros), followed by 5-minute short breaks. Every 4 cycles, you take a longer 15-30 minute break.",
  },
  {
    q: "Do I need an account to use the timer?",
    a: "No — you can start using the timer immediately without signing up. Creating a free account unlocks session history, stats, and cloud sync across devices.",
  },
  {
    q: "How do I add tasks to my session?",
    a: "On the Timer page, you will find a Session Tasks panel. Type your task and press Enter or click the + button to add it. Check tasks off as you complete them during your session.",
  },
  {
    q: "Can I change the timer durations?",
    a: "The default settings follow the classic Pomodoro technique (25 min focus, 5 min short break, 15 min long break). Custom durations are on our roadmap.",
  },
  {
    q: "Is focusloop free?",
    a: "Yes, focusloop is free to use. The core timer and task features will always be free. We may introduce optional premium features in the future.",
  },
  {
    q: "Where can I see my stats?",
    a: "After signing in, visit the Stats page from the navigation bar. You will see your daily loops, total focus time, streaks, and weekly progress charts.",
  },
  {
    q: "Does focusloop work on mobile?",
    a: "focusloop is fully responsive and works great on mobile browsers. A dedicated mobile app is on our roadmap.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium text-foreground">{q}</span>
        {open
          ? <ChevronUp className="size-4 shrink-0 text-primary" />
          : <ChevronDown className="size-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Full-bleed hero image background with LIGHTER overlay to make it MORE VISIBLE */}
          <div className="absolute inset-0 -z-10">
            <img src={heroImg} alt="" className="w-full h-full object-cover object-center" aria-hidden="true" />
            <div className="absolute inset-0 bg-background/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/30" />
          </div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -z-10" />
          <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Logo mark above headline - LARGE and prominent */}
              <div className="flex items-center gap-4 mb-8">
                <img src={logoImg} alt="focusloop" className="size-16 drop-shadow-lg animate-pulse" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg">
                  <Waves className="size-4" />
                  Calm. Focused. Consistent.
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                Stop drifting.<br />
                <span className="text-primary">Start with a timer.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Join thousands who use our free online Pomodoro timer to get real work done. No downloads, no sign-up, no cost—just a timer that keeps you on track, right in your browser.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/timer">
                    Start Your First Pomodoro
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/auth">Create free account</Link>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> 100% free, always. Open the timer and get started—no hidden fees.</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> No account needed. Your first Pomodoro is just one click away.</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> Works on any device. This online timer is ready wherever you are.</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> Smart break reminders. The timer tells you when to rest, so you don’t burn out.</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> Track your sessions. See your focus add up with every timer you complete.</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> Customizable. Set the timer for your perfect work rhythm.</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-success" /> Distraction-free. No ads, no clutter—just a clean timer for deep work.</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-coral rounded-[3rem] blur-2xl opacity-30 -z-10" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow border border-border/40">
                <img
                  src={heroImg}
                  alt="A calm desk setup with a focus timer"
                  width={1280}
                  height={960}
                  className="w-full h-auto"
                />
              </div>
              {/* Timer floating card with LARGER LOGO */}
              <div className="absolute -bottom-6 -left-6 md:-left-10 bg-card rounded-2xl shadow-glow border-2 border-primary/40 p-5 w-64">
                <div className="flex items-center gap-2 mb-3">
                  <img src={logoImg} alt="focusloop" className="size-10 drop-shadow-md animate-spin" style={{animation: 'spin 20s linear infinite'}} />
                  <div className="text-sm uppercase tracking-widest text-primary font-bold">Focus Mode</div>
                </div>
                <div className="text-4xl font-bold tabular-nums">25:00</div>
                <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-coral rounded-full" />
                </div>
              </div>
              {/* Sessions badge with LOGO */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-primary text-white rounded-2xl shadow-glow border-2 border-white/20 px-5 py-4 text-center">
                <img src={logoImg} alt="" className="size-8 mx-auto mb-2 drop-shadow-lg" />
                <div className="text-3xl font-bold">12</div>
                <div className="text-[11px] uppercase tracking-wide font-semibold">Sessions today</div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF STATS STRIP */}
        <section className="border-y border-border/60 bg-card/60">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10k+", label: "Focus sessions logged" },
              { value: "4.8★", label: "Average user rating" },
              { value: "100%", label: "Free core features" },
              { value: "25min", label: "Proven Pomodoro cycle" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-primary tabular-nums">{value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BRAND PERSONALITY */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Brand personality</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Built for the deep work mindset.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personality.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                <div className="size-11 rounded-full bg-primary-soft text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-muted/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Brand values</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we stand for.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {values.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="size-7 text-foreground mb-3 stroke-[1.5]" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IN ACTION */}
        <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Brand personality in action</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How the Pomodoro timer method works</h2>
            <p className="mt-8 text-muted-foreground">
              The Pomodoro timer method is simple: pick a task, set the timer for 25 minutes, and work until it rings. Take a short break, then repeat. After four sessions, enjoy a longer rest. This timer makes it easy to start, stick with it, and actually finish what matters.
            </p>
            <div className="mt-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/timer">
                  Start Your First Pomodoro
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-72 rounded-[2rem] bg-secondary text-secondary-foreground p-8 shadow-glow">
              <div className="text-xs uppercase tracking-widest text-primary text-center mb-6">Pomodoro</div>
              <div className="relative w-full aspect-square max-w-[200px] mx-auto">
                <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90 w-full h-full">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                  <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round"
                    strokeDasharray={String(2 * Math.PI * 46)}
                    strokeDashoffset={String(2 * Math.PI * 46 * 0.4)} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold tabular-nums">25:00</div>
                  <div className="text-xs text-secondary-foreground/60 uppercase tracking-widest mt-2">Focus on your work</div>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="hero" className="w-full">Start</Button>
              </div>
              <div className="mt-4 grid grid-cols-3 text-center text-xs text-secondary-foreground/60 gap-2">
                <div><div className="text-lg font-bold text-secondary-foreground">12</div>Sessions</div>
                <div><div className="text-lg font-bold text-secondary-foreground">5h</div>Focus</div>
                <div><div className="text-lg font-bold text-secondary-foreground">7</div>Streak</div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES & DEMO */}
        <section className="bg-muted/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Articles & Demo</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">See your focus add up</h2>
              <p className="mt-4 text-muted-foreground">Every Pomodoro timer session you finish is a win. Watch your focus sessions and minutes add up. Most users find they get more done in less time once they start using a timer with real structure.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map(({ icon: Icon, tag, title, body, slug }) => {
                const CardContent = (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="size-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{tag}</span>
                    </div>
                    <h3 className="font-semibold text-base leading-snug mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="size-3" />
                    </div>
                  </>
                );

                return slug ? (
                  <Link
                    key={title}
                    to={`/articles/${slug}`}
                    className="group bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:-translate-y-1 transition-all duration-300 block"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <article
                    key={title}
                    className="group bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:-translate-y-1 transition-all duration-300 cursor-pointer opacity-60"
                  >
                    {CardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently asked questions.</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about the Pomodoro timer, online timers, and building better focus habits.</p>
          </div>
          <div className="bg-card border border-border/60 rounded-2xl shadow-soft px-8 py-2">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:hello@focusloop.app" className="text-primary font-medium hover:underline">
              Contact us
            </a>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="max-w-6xl mx-auto px-6">
          <NewsletterSignup />
        </section>

        {/* PREMIUM CTA */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <PremiumCTA />
        </section>

        {/* CTA BANNER */}
        <section className="bg-secondary text-secondary-foreground mt-20">
          <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready to do your best work?</h2>
            <p className="text-secondary-foreground/70 max-w-lg mx-auto mb-8">Start your first 25-minute focus session now — no account required.</p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/timer">
                Start focusing free <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
