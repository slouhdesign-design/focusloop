import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | focusloop" },
      { name: "description", content: "focusloop terms of service. Usage rules, account terms, and liability limitations." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 26, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using focusloop ("the Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              focusloop is a productivity tool providing a Pomodoro timer, task tracking, session analytics, and related features designed to help users improve focus and manage time effectively. The Service is available in both free and premium (paid) versions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Registration</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update it as necessary.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Account Security</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access or security breach.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Account Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may delete your account at any time through your account settings. We reserve the right to suspend or terminate accounts that violate these Terms or engage in prohibited conduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Violate any applicable laws or regulations</li>
              <li className="text-muted-foreground">Use the Service for any unlawful, harmful, or fraudulent purpose</li>
              <li className="text-muted-foreground">Attempt to gain unauthorized access to our systems or other user accounts</li>
              <li className="text-muted-foreground">Upload malicious code, viruses, or engage in hacking attempts</li>
              <li className="text-muted-foreground">Scrape, mine, or extract data from the Service using automated means</li>
              <li className="text-muted-foreground">Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li className="text-muted-foreground">Impersonate others or misrepresent your affiliation</li>
              <li className="text-muted-foreground">Interfere with or disrupt the Service or servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Premium Subscription</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Pricing & Payment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Premium subscriptions are billed monthly or annually as selected. Payment is processed through secure third-party payment providers (e.g., Stripe). All fees are non-refundable except as required by law.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Cancellation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. You will retain access to Premium features until the subscription expires.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Price Changes</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to change subscription pricing with at least 30 days' notice. Price changes will not affect existing subscriptions until renewal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content, features, and functionality of the Service (including but not limited to text, graphics, logos, software, and design) are owned by focusloop or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable license to use the Service for personal or internal business purposes. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. User Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You retain ownership of any tasks, notes, or data you create within the Service ("User Content"). By using the Service, you grant us a limited license to store, display, and process your User Content solely to provide the Service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for the accuracy and legality of your User Content. We do not monitor User Content but reserve the right to remove content that violates these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components. Use of the Service is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FOCUSLOOP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability for any claim arising from the Service shall not exceed the amount you paid us in the 12 months preceding the claim (or $100 if you have not made any payments).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless focusloop and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Third-Party Links & Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of third-party sites. Access to third-party services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law & Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in accordance with the rules of [Arbitration Body], except where prohibited by law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You waive the right to participate in class-action lawsuits or class-wide arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, contact us at:
            </p>
            <ul className="space-y-1 mt-3">
              <li className="text-muted-foreground">Email: <a href="mailto:legal@focusloop.app" className="text-primary hover:underline">legal@focusloop.app</a></li>
              <li className="text-muted-foreground">Website: <a href="https://focusloop.app" className="text-primary hover:underline">focusloop.app</a></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
