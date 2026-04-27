import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/focusloop-hero.jpg";

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socials = [
  { label: "X (Twitter)", href: "https://twitter.com/focusloopapp", Icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com/focusloopapp", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/focusloop", Icon: LinkedInIcon },
  { label: "YouTube", href: "https://youtube.com/@focusloop", Icon: YouTubeIcon },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground mt-24 overflow-hidden">
      {/* Hero image as MORE VISIBLE background */}
      <div className="absolute inset-0 -z-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover object-center opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Logo size="md" showTagline variant="light" />
          <p className="mt-4 text-sm text-secondary-foreground/70 max-w-xs">
            A calm, minimal Pomodoro timer that helps you focus, stay consistent, and achieve more.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-9 rounded-full flex items-center justify-center bg-secondary-foreground/10 text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/timer" className="hover:text-secondary-foreground transition-colors">Timer</Link></li>
            <li><Link to="/blog" className="hover:text-secondary-foreground transition-colors">Blog</Link></li>
            <li><Link to="/stats" className="hover:text-secondary-foreground transition-colors">Stats</Link></li>
            <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
            <li><Link to="/auth" className="hover:text-secondary-foreground transition-colors">Sign up free</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Our mission</h4>
          <p className="text-sm text-secondary-foreground/80">
            To help people focus better, build better habits, and create meaningful impact.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">What we believe</h4>
          <p className="text-sm text-secondary-foreground/80">
            Your time is your most valuable resource. Focus is the key to unlock your best life.
          </p>
        </div>
      </div>

      <div className="relative z-10 border-t border-secondary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/50">
          <span>© {new Date().getFullYear()} focusloop. Deep work made simple.</span>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-secondary-foreground/80 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-secondary-foreground/80 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-secondary-foreground/80 transition-colors">Cookies</Link>
            <Link to="/disclaimer" className="hover:text-secondary-foreground/80 transition-colors">Disclaimer</Link>
            <Link to="/contact" className="hover:text-secondary-foreground/80 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
