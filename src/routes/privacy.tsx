import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | focusloop" },
      { name: "description", content: "focusloop privacy policy. Learn how we collect, use, and protect your data. GDPR compliant." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 26, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At focusloop ("we", "our", "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, store, and share information when you use our Pomodoro timer application and website (the "Service").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy complies with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Information You Provide</h3>
            <ul className="space-y-2 mb-4">
              <li className="text-muted-foreground"><strong className="text-foreground">Account Information:</strong> Email address, name (optional), and password when you create an account.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Session Data:</strong> Timer sessions, tasks you create, focus session duration, and completion statistics.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Newsletter Subscription:</strong> Email address if you subscribe to our productivity newsletter.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
            <ul className="space-y-2 mb-4">
              <li className="text-muted-foreground"><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on pages, features used, and interaction patterns.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Cookies:</strong> See our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a> for details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use your personal data for the following purposes:</p>
            <ul className="space-y-2">
              <li className="text-muted-foreground"><strong className="text-foreground">Provide the Service:</strong> Enable timer functionality, save your sessions, and sync data across devices.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Improve User Experience:</strong> Analyze usage patterns to enhance features and fix bugs.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Communication:</strong> Send productivity tips, product updates, and newsletters (you can unsubscribe anytime).</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Analytics:</strong> Understand how users interact with our Service using tools like Google Analytics.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Security:</strong> Detect and prevent fraud, abuse, and security threats.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Tools & Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the following third-party services that may collect data:</p>
            <ul className="space-y-2">
              <li className="text-muted-foreground"><strong className="text-foreground">Supabase:</strong> Database and authentication provider. Data is stored securely in EU/US servers.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Google Analytics:</strong> Website analytics to understand user behavior (anonymized IP addresses).</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Email Service Provider:</strong> For sending newsletters and transactional emails (we use privacy-focused providers).</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Payment Processor:</strong> If you upgrade to Premium, payment data is handled by Stripe (we do not store credit card information).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We do not sell your personal data. We may share data in the following limited circumstances:</p>
            <ul className="space-y-2">
              <li className="text-muted-foreground"><strong className="text-foreground">Service Providers:</strong> Third-party vendors who help operate our Service (hosting, analytics, email delivery).</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or to protect our legal rights.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred (you will be notified).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights (GDPR Compliance)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Under GDPR and similar regulations, you have the following rights:</p>
            <ul className="space-y-2">
              <li className="text-muted-foreground"><strong className="text-foreground">Access:</strong> Request a copy of all personal data we hold about you.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Rectification:</strong> Correct inaccurate or incomplete data.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Erasure:</strong> Request deletion of your account and all associated data ("right to be forgotten").</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Data Portability:</strong> Receive your data in a machine-readable format to transfer to another service.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Object to Processing:</strong> Opt out of marketing communications or certain data uses.</li>
              <li className="text-muted-foreground"><strong className="text-foreground">Withdraw Consent:</strong> Revoke consent for data processing at any time.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, email us at <a href="mailto:privacy@focusloop.app" className="text-primary hover:underline">privacy@focusloop.app</a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only as long as necessary to provide the Service and comply with legal obligations. Session data and account information are kept while your account is active. If you delete your account, all data is permanently erased within 30 days (except where we must retain data for legal reasons, such as financial records).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption (SSL/TLS), secure servers, and access controls. However, no method of transmission over the Internet is 100% secure. If you become aware of a security breach, please contact us immediately at <a href="mailto:security@focusloop.app" className="text-primary hover:underline">security@focusloop.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service is not intended for users under 13 years old. We do not knowingly collect data from children. If you believe a child has provided us with personal data, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data may be processed in countries outside your jurisdiction. When we transfer data internationally, we ensure adequate safeguards are in place (such as Standard Contractual Clauses) to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. For significant changes, we will notify you via email or a prominent notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your data, contact us at:
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
