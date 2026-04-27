import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | focusloop" },
      { name: "description", content: "Learn about how focusloop uses cookies and similar technologies. Manage your cookie preferences." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 26, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit websites. They help websites remember your preferences, improve user experience, and provide analytics data to website owners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              focusloop uses cookies and similar technologies (such as local storage and session storage) to enhance your experience and provide core functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>

            <div className="bg-card border border-border/60 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Essential Cookies (Strictly Necessary)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies are required for the Service to function properly. They enable core features like authentication, session management, and security. You cannot opt out of these cookies.
              </p>
              <ul className="space-y-2">
                <li className="text-muted-foreground"><strong className="text-foreground">Authentication:</strong> Keeps you logged in to your account</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Security:</strong> Protects against CSRF attacks and ensures secure connections</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Session State:</strong> Remembers your timer settings and active session</li>
              </ul>
            </div>

            <div className="bg-card border border-border/60 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Analytics Cookies (Performance)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies help us understand how users interact with the Service by collecting anonymous usage data. We use this information to improve features and user experience.
              </p>
              <ul className="space-y-2">
                <li className="text-muted-foreground"><strong className="text-foreground">Google Analytics:</strong> Tracks page views, session duration, and user behavior (anonymized)</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Usage Metrics:</strong> Monitors feature adoption and performance</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                <strong className="text-foreground">You can opt out</strong> of analytics cookies through your browser settings or our cookie consent banner.
              </p>
            </div>

            <div className="bg-card border border-border/60 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Functional Cookies (Preferences)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies remember your preferences and settings to provide a personalized experience.
              </p>
              <ul className="space-y-2">
                <li className="text-muted-foreground"><strong className="text-foreground">Theme Preference:</strong> Remembers dark/light mode choice</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Language:</strong> Stores your preferred language (if applicable)</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Timer Settings:</strong> Saves custom Pomodoro durations</li>
              </ul>
            </div>

            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">2.4 Marketing Cookies (Advertising)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies track your browsing activity to deliver relevant ads and measure campaign effectiveness. We only use these with your consent.
              </p>
              <ul className="space-y-2">
                <li className="text-muted-foreground"><strong className="text-foreground">Ad Networks:</strong> Display targeted productivity tool recommendations</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Retargeting:</strong> Show relevant ads on other websites</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                <strong className="text-foreground">You can opt out</strong> by declining marketing cookies in the consent banner.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use third-party services that may set their own cookies:
            </p>
            <ul className="space-y-2">
              <li className="text-muted-foreground"><strong className="text-foreground">Google Analytics:</strong> Performance tracking (analytics)</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Stripe:</strong> Payment processing (if you subscribe to Premium)</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Email Service:</strong> Newsletter and transactional emails</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Social Media Widgets:</strong> Share buttons (Twitter, LinkedIn)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These third parties have their own privacy policies. We recommend reviewing them to understand how they use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. How Long Do Cookies Last?</h2>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Session Cookies:</strong> Temporary cookies deleted when you close your browser
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until manually deleted
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Cookie Consent Banner</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you first visit focusloop, a cookie consent banner will appear. You can choose to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-muted-foreground">Accept all cookies</li>
              <li className="text-muted-foreground">Reject non-essential cookies (analytics and marketing)</li>
              <li className="text-muted-foreground">Customize preferences by category</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Browser Settings</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-muted-foreground">View and delete existing cookies</li>
              <li className="text-muted-foreground">Block all cookies or only third-party cookies</li>
              <li className="text-muted-foreground">Receive notifications when cookies are set</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Blocking essential cookies may prevent the Service from working correctly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.3 Opt-Out Tools</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Google Analytics:</strong> Use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-Out Browser Add-on</a>
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Ad Networks:</strong> Visit <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices</a> or <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NAI Opt-Out</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Do Not Track Signals</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some browsers offer "Do Not Track" (DNT) settings. Currently, there is no industry standard for how to respond to DNT signals. We do not alter our data collection practices based on DNT signals, but you can manage cookies through the methods described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy to reflect changes in technology or legal requirements. The "Last updated" date at the top indicates when changes were made. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our use of cookies, contact us at:
            </p>
            <ul className="space-y-1 mt-3">
              <li className="text-muted-foreground">Email: <a href="mailto:privacy@focusloop.app" className="text-primary hover:underline">privacy@focusloop.app</a></li>
              <li className="text-muted-foreground">Website: <a href="https://focusloop.app" className="text-primary hover:underline">focusloop.app</a></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
