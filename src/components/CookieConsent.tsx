import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Cookie, Settings, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
    
    // Initialize analytics/marketing scripts here
    if (typeof window !== "undefined") {
      // Example: window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  };

  const rejectNonEssential = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
    
    // Apply user preferences
    if (typeof window !== "undefined") {
      // Example: Enable/disable analytics based on preferences
      // if (preferences.analytics) { initAnalytics(); }
    }
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "essential") return; // Cannot disable essential cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]" onClick={() => setIsVisible(false)} />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 md:p-6 pointer-events-none">
        <div className="max-w-4xl mx-auto bg-card border-2 border-primary/30 rounded-2xl shadow-2xl pointer-events-auto">
          {!showSettings ? (
            // Simple Banner
            <div className="p-6 md:p-8">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 size-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Cookie className="size-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">We Value Your Privacy</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your experience, analyze site traffic, and provide personalized content. By clicking "Accept All", you consent to our use of cookies.{" "}
                    <Link to="/cookies" className="text-primary hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={acceptAll}
                  className="flex-1"
                >
                  <Check className="size-4" />
                  Accept All Cookies
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={rejectNonEssential}
                  className="flex-1"
                >
                  Reject Non-Essential
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setShowSettings(true)}
                >
                  <Settings className="size-4" />
                  Customize
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                🇪🇺 GDPR Compliant • Worldwide Privacy Standards
              </p>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 md:p-8">
              <button
                onClick={() => setShowSettings(false)}
                className="absolute top-4 right-4 size-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Back"
              >
                <X className="size-4" />
              </button>

              <h2 className="text-xl font-bold mb-4">Cookie Preferences</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Choose which cookies you want to allow. You can change these settings at any time.
              </p>

              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="bg-muted/30 border border-border/40 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">Essential Cookies</h3>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          Always Active
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function. These cookies enable core features like security, authentication, and session management.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="size-11 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="size-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-background border border-border/60 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how you use the site. We use this data to improve features and user experience (Google Analytics).
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`shrink-0 size-11 rounded-full flex items-center justify-center transition-colors ${
                        preferences.analytics
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                      aria-label={preferences.analytics ? "Disable analytics" : "Enable analytics"}
                    >
                      {preferences.analytics && <Check className="size-5" />}
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-background border border-border/60 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Used to show you relevant ads and measure campaign effectiveness. These track your activity across websites.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`shrink-0 size-11 rounded-full flex items-center justify-center transition-colors ${
                        preferences.marketing
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                      aria-label={preferences.marketing ? "Disable marketing" : "Enable marketing"}
                    >
                      {preferences.marketing && <Check className="size-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={savePreferences}
                  className="flex-1"
                >
                  Save Preferences
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={acceptAll}
                  className="flex-1"
                >
                  Accept All
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Read our full{" "}
                <Link to="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
