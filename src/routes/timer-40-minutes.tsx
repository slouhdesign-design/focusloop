import React from "react";
import { Link } from "@tanstack/react-router";

// Demo timer component (replace with your real timer)
function Timer({ minutes }: { minutes: number }) {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="text-6xl font-bold text-primary mb-2">{minutes}:00</div>
      <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold text-lg shadow">Start Timer</button>
    </div>
  );
}

// Demo social icons (replace with your real icons/links)
function SocialBar() {
  return (
    <div className="sticky top-24 flex flex-col gap-4 items-center">
      <a href="#" className="text-blue-500">Twitter</a>
      <a href="#" className="text-blue-700">Facebook</a>
      <a href="#" className="text-pink-600">Instagram</a>
      <a href="#" className="text-gray-700">LinkedIn</a>
    </div>
  );
}

export default function TimerArticleDemo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[60px_1fr] gap-8">
      {/* Social icons sticky bar */}
      <aside className="hidden md:block">
        <SocialBar />
      </aside>
      <main>
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">40 Minute Timer</h1>
        <p className="text-lg text-muted-foreground mb-6">Set a free, online 40 minute timer for work, study, or focus. No sign-up, no download—just a simple timer that keeps you on track.</p>
        <Timer minutes={40} />
        {/* Article Container */}
        <article className="prose prose-lg max-w-none my-12">
          <h2>Why Use a 40 Minute Timer?</h2>
          <p>Forty minutes is a sweet spot for deep focus. It’s long enough to make real progress, but short enough to avoid burnout. Whether you’re studying, working, or meditating, a 40 minute timer helps you stay committed without feeling overwhelmed.</p>
          <h2>How to Get the Most from Your Timer</h2>
          <ul>
            <li>Pick one task to focus on for the full 40 minutes.</li>
            <li>Silence notifications and close distracting tabs.</li>
            <li>Take a 5–10 minute break when the timer ends.</li>
            <li>Repeat for another round if you’re still feeling fresh.</li>
          </ul>
          <h2>Popular Uses for a 40 Minute Timer</h2>
          <ul>
            <li>Study sessions for exams or assignments</li>
            <li>Focused work sprints for creative projects</li>
            <li>Yoga, meditation, or mindfulness practice</li>
            <li>Cooking or baking with longer prep times</li>
          </ul>
        </article>
        {/* FAQ Section */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="mb-4">
            <strong>Can I use this 40 minute timer on my phone?</strong>
            <p>Yes! This timer works in any browser, on any device—no app needed.</p>
          </div>
          <div className="mb-4">
            <strong>What happens when the timer ends?</strong>
            <p>You’ll hear a sound and see a notification. Take a break, then start another session if you like.</p>
          </div>
          <div className="mb-4">
            <strong>Is this 40 minute timer free?</strong>
            <p>Absolutely. All our online timers are 100% free to use, forever.</p>
          </div>
        </section>
        {/* Internal Link to Main Pomodoro Timer */}
        <div className="my-8 text-center">
          <Link to="/" className="text-primary font-semibold underline">Looking for a Pomodoro timer? Try our main Pomodoro Timer tool!</Link>
        </div>
      </main>
    </div>
  );
}
