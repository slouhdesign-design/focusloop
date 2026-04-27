import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import logo from "@/assets/focusloop-logo.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog - Productivity Tips & Deep Work Guides | focusloop" },
      { 
        name: "description", 
        content: "Expert articles on productivity, focus techniques, deep work strategies, and the Pomodoro Technique. Learn how to maximize your concentration and achieve more." 
      },
      { name: "keywords", content: "productivity blog, focus tips, deep work articles, pomodoro technique guide, concentration strategies, time management blog, work from home tips" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "focusloop Blog - Productivity & Deep Work Articles" },
      { property: "og:description", content: "Expert guides on focus, productivity, and deep work. Master the Pomodoro Technique and build better work habits." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogPage,
});

const blogArticles = [
  {
    slug: "science-behind-pomodoro",
    title: "The Science Behind the Pomodoro Technique",
    category: "Guide",
    date: "April 15, 2026",
    readTime: "8 min read",
    excerpt: "Discover why 25-minute deep work sessions align with your brain's natural attention cycles and how they supercharge productivity.",
    icon: "🧠",
  },
  {
    slug: "enter-deep-work-fast",
    title: "5 Ways to Enter Deep Work in Under 2 Minutes",
    category: "Techniques",
    date: "April 12, 2026",
    readTime: "6 min read",
    excerpt: "Quick rituals to eliminate distractions instantly. The Closed Tab Ritual, Breath Reset, and more proven strategies.",
    icon: "⚡",
  },
  {
    slug: "tracking-focus-changes-everything",
    title: "How Tracking Your Focus Sessions Changes Everything",
    category: "Productivity",
    date: "April 8, 2026",
    readTime: "7 min read",
    excerpt: "Tracking reveals hidden patterns in your productivity. Learn what data to collect and how to use it to optimize your schedule.",
    icon: "📊",
  },
  {
    title: "Why Breaks Are Not Wasted Time",
    category: "Science",
    date: "April 5, 2026",
    readTime: "5 min read",
    excerpt: "Your brain consolidates learning during breaks. Skipping them leads to cognitive overload. Discover the neuroscience behind effective rest.",
    icon: "⏸️",
    slug: null,
  },
  {
    title: "Building an Anti-Distraction Environment",
    category: "Setup",
    date: "April 1, 2026",
    readTime: "9 min read",
    excerpt: "Notifications destroy focus. Create a workspace designed for deep work with simple changes to your devices, desk, and routines.",
    icon: "🔔",
    slug: null,
  },
  {
    title: "The Habit Loop: How focusloop Helps You Stay Consistent",
    category: "Habits",
    date: "March 28, 2026",
    readTime: "6 min read",
    excerpt: "Daily Pomodoro practice strengthens your attention span like exercise builds muscle. Start small and compound your focus over time.",
    icon: "🔁",
    slug: null,
  },
  {
    title: "Cal Newport's Deep Work Principles Applied Daily",
    category: "Deep Work",
    date: "March 25, 2026",
    readTime: "10 min read",
    excerpt: "Deep Work isn't theory — it's a practice. Apply Cal Newport's philosophy with structured Pomodoro sessions and watch your output soar.",
    icon: "📚",
    slug: null,
  },
  {
    title: "How Remote Workers Use focusloop to Stay Structured",
    category: "Remote Work",
    date: "March 20, 2026",
    readTime: "7 min read",
    excerpt: "Remote workers struggle with boundaries. Use timed sessions to separate work from life and maintain professional-level productivity at home.",
    icon: "🏠",
    slug: null,
  },
  {
    title: "Study Smarter: Pomodoro for Exam Preparation",
    category: "Students",
    date: "March 15, 2026",
    readTime: "8 min read",
    excerpt: "Students see massive gains with the Pomodoro Technique. Use each session for active recall and spaced repetition to ace your exams.",
    icon: "💡",
    slug: null,
  },
];

function BlogPage() {
  const publishedArticles = blogArticles.filter(a => a.slug !== null);
  const upcomingArticles = blogArticles.filter(a => a.slug === null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <img src={logo} alt="focusloop" className="size-12 drop-shadow-sm" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Productivity & Deep Work Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert guides on focus, the Pomodoro Technique, and building better work habits. Master your attention, achieve meaningful work.
          </p>
        </div>

        {/* Published Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                    {article.icon}
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-8">
            We're working on these guides. Subscribe to our newsletter to get notified when they're published.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingArticles.map((article, i) => (
              <div
                key={i}
                className="bg-card/50 border border-border/40 rounded-2xl p-6 opacity-60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-full bg-muted flex items-center justify-center text-2xl shrink-0">
                    {article.icon}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-3">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 text-center bg-gradient-coral/10 border border-primary/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Article</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get new productivity guides delivered to your inbox. Join 10,000+ focused professionals.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Subscribe to Newsletter
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
