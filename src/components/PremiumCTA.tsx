import { Button } from "./ui/button";
import { Check, Gift } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/focusloop-logo.png";

export function PremiumCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-coral/10 border border-primary/20 rounded-3xl p-8 md:p-12 shadow-soft">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo + badge row */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={logo} alt="focusloop" className="size-10 drop-shadow-sm" />
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Gift className="size-4" />
            <span>100% Free Forever</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything Included — Free for Everyone
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          No subscriptions, no paywalls, no hidden fees. All features are available to every user, always.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="size-3 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Advanced Analytics</div>
              <div className="text-xs text-muted-foreground">Track trends, identify patterns, optimize your schedule</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="size-3 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Custom Timer Settings</div>
              <div className="text-xs text-muted-foreground">Adjust Pomodoro lengths, break times, notifications</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="size-3 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Community Support</div>
              <div className="text-xs text-muted-foreground">Get help from the focusloop community</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="size-3 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Unlimited Sessions</div>
              <div className="text-xs text-muted-foreground">No limits on saved sessions or task history</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="size-3 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Export Your Data</div>
              <div className="text-xs text-muted-foreground">Download CSV reports of all your sessions</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="size-3 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-sm">Ad-Free Experience</div>
              <div className="text-xs text-muted-foreground">Pure focus with zero distractions</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/auth">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <Gift className="size-5" />
              Get Started — It's Free
            </Button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          No credit card required • No trial period • Free forever
        </p>
      </div>
    </section>
  );
}
