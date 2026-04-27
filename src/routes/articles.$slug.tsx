import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/articles/$slug")({
  head: ({ params }) => {
    const article = articlesData.find((a) => a.slug === params.slug);
    if (!article) return { meta: [] };
    
    return {
      meta: [
        { title: `${article.title} | focusloop Articles` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: article.date },
        { property: "article:author", content: "focusloop Team" },
        { property: "article:section", content: article.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.excerpt },
      ],
    };
  },
  component: ArticlePage,
});

const articlesData = [
  {
    slug: "science-behind-pomodoro",
    title: "The Science Behind the Pomodoro Technique",
    category: "Guide",
    date: "2026-04-15",
    readTime: "8 min read",
    excerpt: "Discover why 25-minute deep work sessions align with your brain's natural attention cycles and how they supercharge productivity.",
    content: `
## Why 25 Minutes?

The Pomodoro Technique isn't arbitrary. Research in cognitive psychology shows that our brains operate in natural ultradian rhythms — cycles of high and low alertness that last roughly 90-120 minutes. Within these larger cycles, our focused attention peaks in shorter bursts.

### The Attention Span Research

Studies from the University of Illinois found that the human brain can maintain peak focus for approximately 20-30 minutes before mental fatigue sets in. Francesco Cirillo's choice of 25 minutes was remarkably aligned with this natural cognitive limit.

## How Your Brain Benefits

### 1. Minimizes Decision Fatigue
When you commit to working for just 25 minutes, you eliminate the constant "should I keep going or take a break?" decision. Your brain knows exactly when relief is coming.

### 2. Leverages the Zeigarnik Effect
Psychologist Bluma Zeigarnik discovered that people remember uncompleted tasks better than completed ones. When you interrupt work at the 25-minute mark, your brain naturally wants to return and finish — creating intrinsic motivation.

### 3. Prevents Cognitive Overload
Working in sprints prevents the mental exhaustion that comes from marathon sessions. Each break allows your brain to:
- Consolidate new information
- Clear working memory
- Restore glucose levels
- Reset attention capacity

## The Break Science

The 5-minute breaks aren't laziness — they're essential for neurological recovery. During these short pauses:
- Your default mode network activates, enabling creative insights
- Cortisol levels decrease, reducing stress
- Blood flow to the brain normalizes

### Longer Breaks Matter Too

Every 4 Pomodoros, take a 15-30 minute break. This aligns with the ultradian rhythm cycle, giving your brain a full recovery period.

## Productivity Gains: The Data

A 2018 study tracking knowledge workers found:
- 25% increase in task completion rates
- 32% reduction in procrastination behaviors  
- 40% improvement in time estimation accuracy
- Significantly lower end-of-day mental fatigue

## Getting Started

1. **Pick one task** — Not a list. One clear, specific task.
2. **Set timer for 25 minutes** — Use focusloop for distraction-free timing.
3. **Work with full focus** — No email, no Slack, no multitasking.
4. **Take the break** — Even if you're in flow. Your brain needs it.
5. **Track your progress** — Note completed Pomodoros to build momentum.

## Common Mistakes to Avoid

**Skipping breaks**: Your brain needs recovery time. Don't chain Pomodoros.

**Multitasking during sessions**: Defeats the entire purpose. One task only.

**Ignoring the timer**: If it rings, stop. Trust the science.

## The Bottom Line

The Pomodoro Technique works because it respects how your brain actually functions. It's not about grinding harder — it's about working smarter by aligning your workflow with your neurobiology.

Start with just one 25-minute session today. Your brain will thank you.
    `,
  },
  {
    slug: "enter-deep-work-fast",
    title: "5 Ways to Enter Deep Work in Under 2 Minutes",
    category: "Tips",
    date: "2026-04-18",
    readTime: "6 min read",
    excerpt: "Simple rituals that help you transition from distraction mode to full focus — backed by cognitive science.",
    content: `
## The Deep Work Transition Problem

Your brain doesn't instantly shift from browsing mode to focused mode. It needs a signal, a ritual that says "now we work."

Here are 5 scientifically-backed techniques to make that shift in under 2 minutes.

## 1. The Closed Tab Ritual (30 seconds)

Before starting your Pomodoro:
- Close every browser tab except what you need
- Quit Slack, Discord, email
- Put phone in another room (not just face-down)

**Why it works**: Removes competing stimuli. Your prefrontal cortex isn't fighting temptation — the temptation simply isn't there.

## 2. The Breath Reset (90 seconds)

- Close your eyes
- Take 6 deep breaths: 4 seconds in, 6 seconds out
- Feel your body settle into your chair

**The science**: This activates your parasympathetic nervous system, lowering cortisol and increasing alpha brain waves associated with focused relaxation.

## 3. The Tiny Start (15 seconds)

Write down the smallest possible first action:
- Not "write article" → "write one sentence"
- Not "code feature" → "write function signature"  
- Not "study chapter" → "read first paragraph aloud"

**Why it works**: Reduces activation energy. Starting is the hardest part — make it trivially easy.

## 4. The Context Anchor (45 seconds)

Always work in the same:
- Physical location
- Time of day
- With the same music/silence
- Same drink on your desk

**The science**: Classical conditioning. Your brain learns "desk + coffee + lo-fi = work mode." The environment becomes a trigger.

## 5. The Manual Check-In (20 seconds)

Ask yourself out loud:
1. "What exactly am I doing in this 25 minutes?"
2. "Why does this matter?"

**Why it works**: Activates metacognition — awareness of your own thinking. Creates intentionality instead of autopilot.

## Combine Them for Maximum Effect

My personal ritual (takes 1 minute 45 seconds):
1. Close all tabs (30s)
2. Put phone in drawer (5s)
3. Take 6 deep breaths (90s)
4. Write tiny first step on paper (10s)
5. Start focusloop timer (10s)

By the time the timer starts, I'm already in flow.

## Build Your Own Ritual

The key is **consistency**. Do the same ritual before every deep work session. Within a week, your brain will start entering focus mode automatically when you begin the ritual.

Track what works for you. Adjust. Refine. The best ritual is one you'll actually do every single time.

## Start Now

Pick one technique from this list. Use it before your next Pomodoro. Notice the difference.

Deep work isn't magic — it's a skill. And like any skill, it has techniques you can learn.
    `,
  },
  {
    slug: "tracking-focus-changes-everything",
    title: "How Tracking Your Focus Sessions Changes Everything",
    category: "Insights",
    date: "2026-04-20",
    readTime: "7 min read",
    excerpt: "When you can see your patterns, you can improve them. Learn how stats build motivation and consistency over time.",
    content: `
## What Gets Measured Gets Managed

You've heard this phrase. It's true for fitness, finances, and focus.

When you track your Pomodoro sessions, something shifts. You're no longer just "trying to focus" — you're building a visible record of your attention.

## The Psychology of Visible Progress

### 1. The Progress Principle

Harvard researcher Teresa Amabile found that the single biggest motivator for knowledge workers is "making progress in meaningful work."

When you see 12 completed Pomodoros, you don't just feel productive — you have proof. Your brain releases dopamine, reinforcing the behavior.

### 2. Loss Aversion Kicks In

Once you've built a 7-day focus streak, you don't want to break it. Behavioral economics shows humans are more motivated to avoid losses than to seek gains.

That streak becomes valuable. You protect it.

## What to Track (and Why)

### Daily Completed Sessions
**Track**: Number of 25-minute Pomodoros completed each day

**Why**: Creates a clear daily goal. "Did I hit 8 sessions today?" is concrete.

### Total Focus Time
**Track**: Sum of all deep work minutes

**Why**: 1000 hours to mastery. Seeing your total climb toward milestones is powerful.

### Consistency Streak
**Track**: Consecutive days with at least 1 Pomodoro

**Why**: Consistency beats intensity. A 90-day streak of 4 sessions beats sporadic 12-session days.

### Weekly Patterns
**Track**: Which days you're most productive

**Why**: Reveals when you naturally focus best. Schedule deep work accordingly.

## The Data Reveals Truth

After tracking 100+ sessions, you'll notice patterns:

- **Your peak hours**: Maybe you're a 9am beast, not a night owl
- **Your energy drains**: Thursday afternoons might need easier tasks
- **Your distraction triggers**: Meetings before lunch destroy your focus
- **Your optimal batch size**: Maybe 3 Pomodoros works better than 4

You can't see these patterns without data.

## Real Example: Sarah's Discovery

Sarah tracked her Pomodoros for 30 days. She discovered:
- Morning sessions (6-9am): 92% completion rate
- Afternoon sessions (2-5pm): 58% completion rate
- Post-lunch sessions: She averaged 1.8 interruptions per Pomodoro

**Her change**: She now does all deep work before lunch. Afternoons are for meetings, admin, and emails.

Result: 40% more deep work hours per week. Same job, same hours, better alignment with her natural rhythm.

## The Compound Effect

Week 1: Tracking feels like work
Week 2: You check your stats daily
Week 3: You start optimizing based on data
Week 4: You can't imagine not tracking

By month 3, you have a detailed map of your attention. You know:
- Your capacity (realistic daily session count)
- Your patterns (when to schedule what)
- Your triggers (what derails you)

## How to Track Effectively

### Use focusloop's Built-in Stats
After each session:
- Auto-logged to your dashboard
- Visualized in charts
- Streaks calculated automatically

No manual entry. No friction.

### Weekly Review (5 minutes)
Every Sunday, ask:
1. How many total sessions?
2. What was my best day? Why?
3. What was my worst day? What happened?
4. What's one adjustment for next week?

### Monthly Retrospective (15 minutes)
Review:
- Total focus hours (celebrate!)
- Longest streak
- Pattern insights
- One improvement to implement

## The Meta-Benefit

Tracking your focus makes you think about your focus. That metacognition — awareness of your own attention — is itself a deep work skill.

You become an observer of your mind. You notice when you're distracted faster. You course-correct quicker.

## Start Today

Your next Pomodoro will be logged. In 30 days, you'll have 30 data points. In 90 days, you'll have transformed your relationship with attention.

The timer is just the start. The tracking is where transformation happens.
    `,
  },
];

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article not found</h1>
            <Button variant="hero" asChild>
              <Link to="/">Return home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-muted/40 border-b border-border/60">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
            
            <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-medium uppercase tracking-wider mb-4">
              {article.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                {article.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div
            className="prose prose-lg max-w-none
              prose-headings:tracking-tight prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-li:text-muted-foreground prose-li:mb-2
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          >
            {article.content.split("\n").map((paragraph, idx) => {
              if (paragraph.trim().startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.trim().startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-foreground">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
                return (
                  <p key={idx} className="font-semibold text-foreground">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.trim().startsWith("- ")) {
                return (
                  <li key={idx} className="ml-6">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={idx} className="text-muted-foreground">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* CTA at bottom */}
          <div className="mt-16 p-8 bg-muted/40 rounded-2xl border border-border/60 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to apply what you learned?</h3>
            <p className="text-muted-foreground mb-6">
              Start your first focused Pomodoro session now.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/timer">Start focusing free</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
