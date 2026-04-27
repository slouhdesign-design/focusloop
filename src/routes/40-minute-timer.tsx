import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const head = () => ({
  title: "40 Minute Timer — Free Online Countdown | What Time Will It Be?",
  meta: [
    { name: "description", content: "Start a free 40 minute timer right now. Instantly see what time it will be in 40 minutes, or what time it was 40 minutes ago. No download needed." },
    { name: "keywords", content: "40 minute timer, timer for 40 minutes, set a timer for 40 minutes, what time will it be in 40 minutes, what time is 40 minutes from now, 1 hour 40 minute timer" },
  ],
  links: [
    { rel: "canonical", href: "https://yoursite.com/40-minute-timer" },
  ],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "40 Minute Timer",
        "url": "https://yoursite.com/40-minute-timer",
        "description": "Free online 40 minute timer. Starts instantly in your browser.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What time will it be in 40 minutes?",
            "acceptedAnswer": { "@type": "Answer", "text": "Add 40 minutes to your current time. Use the free timer on this page to count down automatically." }
          },
          {
            "@type": "Question",
            "name": "What time was it 40 minutes ago?",
            "acceptedAnswer": { "@type": "Answer", "text": "Subtract 40 minutes from your current time to find what time it was 40 minutes ago." }
          }
        ]
      })
    }
  ]
});

function Timer({ minutes }: { minutes: number }) {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="text-7xl font-bold text-primary mb-4">{minutes}:00</div>
      <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-xl shadow-lg">Start Timer</button>
    </div>
  );
}

function SocialBar() {
  return (
    <div className="sticky top-32 flex flex-col gap-6 items-center text-muted-foreground">
      <a href="#" aria-label="Share on Facebook"><Facebook className="size-7 hover:text-blue-600 transition" /></a>
      <a href="#" aria-label="Share on Twitter"><Twitter className="size-7 hover:text-sky-500 transition" /></a>
      <a href="#" aria-label="Share on Instagram"><Instagram className="size-7 hover:text-pink-500 transition" /></a>
      <a href="#" aria-label="Share on LinkedIn"><Linkedin className="size-7 hover:text-blue-800 transition" /></a>
    </div>
  );
}

function ArticleTable() {
  return (
    <table className="my-4 w-full text-left border-collapse">
      <thead>
        <tr><th>Current Time</th><th>Time in 40 Minutes</th></tr>
      </thead>
      <tbody>
        <tr><td>8:00 AM</td><td>8:40 AM</td></tr>
        <tr><td>12:00 PM</td><td>12:40 PM</td></tr>
        <tr><td>3:45 PM</td><td>4:25 PM</td></tr>
      </tbody>
    </table>
  );
}

function ArticleTableAgo() {
  return (
    <table className="my-4 w-full text-left border-collapse">
      <thead>
        <tr><th>Current Time</th><th>40 Minutes Ago</th></tr>
      </thead>
      <tbody>
        <tr><td>9:00 AM</td><td>8:20 AM</td></tr>
        <tr><td>12:30 PM</td><td>11:50 AM</td></tr>
        <tr><td>2:00 PM</td><td>1:20 PM</td></tr>
      </tbody>
    </table>
  );
}

function InternalLinks() {
  return (
    <div className="my-8 space-x-4">
      <Link to="/25-minute-timer" className="text-primary underline">25 minute timer</Link>
      <Link to="/pomodoro-timer" className="text-primary underline">Pomodoro timer</Link>
      <Link to="/1-hour-timer" className="text-primary underline">1 hour timer</Link>
      <Link to="/60-minute-timer" className="text-primary underline">60 minute timer</Link>
      <Link to="/stopwatch" className="text-primary underline">online stopwatch</Link>
      <Link to="/time-zone-converter" className="text-primary underline">time zone converter</Link>
    </div>
  );
}

function ExternalLinks() {
  return (
    <div className="my-8">
      <a href="https://hbr.org/2018/01/how-to-spend-the-first-10-minutes-of-your-day" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline mr-4">The Science of Time Blocking (Harvard Business Review)</a>
      <a href="https://www.bbc.com/worklife/article/20201104-the-case-for-taking-short-breaks-at-work" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Why Short Breaks Help You Focus (BBC)</a>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What time will it be in 40 minutes?",
      a: "Add 40 minutes to your current time, or start the timer above to see the answer."
    },
    {
      q: "Can I use this timer on my phone?",
      a: "Yes! This timer works on any device, no app needed."
    },
    {
      q: "Is this timer free?",
      a: "100% free, forever. No sign-up, no ads, no catch."
    }
  ];
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="bg-muted/40 rounded-lg p-4 border border-border/60">
            <summary className="font-semibold cursor-pointer text-primary">{q}</summary>
            <p className="mt-2 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none my-12 bg-card/80 rounded-2xl p-8 shadow-soft border border-border/60">
      <h2>Why 40 Minutes?</h2>
      <p>Forty minutes is the sweet spot for deep focus. It’s long enough to make real progress, but short enough to keep your mind sharp. Whether you’re studying, working, meditating, or cooking, a 40 minute timer helps you commit—without feeling overwhelmed.</p>
      <h2>What Time Will It Be in 40 Minutes?</h2>
      <p>Curious what time it will be when your session ends? Start the timer and watch the countdown. Or, check this quick chart:</p>
      <ArticleTable />
      <h2>What Time Was It 40 Minutes Ago?</h2>
      <p>Sometimes, looking back is just as important. Subtract 40 minutes from now to see when you started, finished, or need to check in.</p>
      <ArticleTableAgo />
      <h2>The Science of 40 Minutes</h2>
      <p>Research shows our brains thrive in focused blocks of 20–50 minutes. Forty minutes is the “Goldilocks” zone—just right for deep work, learning, or creative flow. NASA, top universities, and productivity experts all agree: 40 minutes is a magic number.</p>
      <h2>How to Use This Timer</h2>
      <ol>
        <li>Open this page on any device.</li>
        <li>Press Start. Your 40 minute countdown begins.</li>
        <li>Focus on one task—no multitasking!</li>
        <li>When the timer ends, take a real break.</li>
        <li>Repeat for another round if you’re in the zone.</li>
      </ol>
      <h2>Best Uses for a 40 Minute Timer</h2>
      <ul>
        <li><strong>Students:</strong> Exam prep, reading, or writing sprints.</li>
        <li><strong>Remote Workers:</strong> Deep work blocks, meetings, or creative sessions.</li>
        <li><strong>Athletes:</strong> Training intervals, yoga, or meditation.</li>
        <li><strong>Cooks:</strong> Baking, roasting, or meal prep.</li>
      </ul>
      <InternalLinks />
      <ExternalLinks />
    </article>
  );
}

function Timer40MinutesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[60px_1fr] gap-8">
          {/* Social icons sticky bar */}
          <aside className="hidden md:block">
            <SocialBar />
          </aside>
          <section>
            {/* Hero Section with Timer */}
            <div className="mb-10 flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Free 40 Minute Timer — Start Counting Down Right Now</h1>
              <p className="text-lg text-muted-foreground mb-6 text-center">No sign-up, no download, no distractions. Just a beautiful, live timer that helps you own your next 40 minutes.</p>
              <Timer minutes={40} />
            </div>
            <ArticleContent />
            <FAQ />
            {/* CTA */}
            <div className="my-8 text-center">
              <span className="block text-xl font-semibold mb-2">Ready to own your next 40 minutes?</span>
              <span className="block mb-4">Scroll up, press Start, and make every second count.</span>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/40-minute-timer")({
  head,
  component: Timer40MinutesPage,
});
