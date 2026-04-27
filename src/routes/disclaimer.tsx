import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | focusloop" },
      { name: "description", content: "focusloop disclaimer. Productivity results not guaranteed. Informational purposes only." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 26, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. General Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information provided by focusloop ("we," "us," or "our") on our website and through our Service (the "Service") is for general informational and educational purposes only. All content on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Under no circumstance shall we have any liability to you</strong> for any loss or damage of any kind incurred as a result of the use of the Service or reliance on any information provided on the Service. Your use of the Service and your reliance on any information is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Productivity Results Not Guaranteed</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              focusloop is a productivity tool designed to help users manage their time using the Pomodoro Technique and related methods. However:
            </p>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Individual results vary:</strong> Productivity improvements depend on many factors including individual effort, work environment, task complexity, and personal circumstances.
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">No guarantees:</strong> We do not guarantee specific outcomes such as increased productivity, improved focus, or completion of tasks within a certain timeframe.
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">User responsibility:</strong> The effectiveness of the Service depends on consistent and appropriate use by the user. We are not responsible for outcomes resulting from misuse or inconsistent use.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Testimonials, case studies, and statistics presented on the Service represent individual experiences and may not reflect typical results. Your results may differ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Medical & Mental Health Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">focusloop is not a medical device or mental health treatment tool.</strong>
            </p>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                The Service is not intended to diagnose, treat, cure, or prevent any medical condition, including but not limited to ADHD, anxiety, depression, or other attention-related disorders.
              </li>
              <li className="text-muted-foreground">
                If you are experiencing persistent difficulties with focus, concentration, or productivity, we recommend consulting a qualified healthcare professional or mental health provider.
              </li>
              <li className="text-muted-foreground">
                The techniques and strategies discussed in our articles and guides are for informational purposes only and should not replace professional medical or psychological advice.
              </li>
              <li className="text-muted-foreground">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Professional Advice Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content on the Service, including articles, blog posts, and tips, does not constitute professional advice (medical, psychological, legal, financial, or otherwise). The information is provided for general educational purposes only. Before making important decisions related to your health, career, or business, consult with an appropriate licensed professional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. External Links Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service may contain links to external websites, third-party tools, affiliate products, or resources that are not provided or maintained by us. We do not endorse, warrant, or assume responsibility for the accuracy, relevance, or quality of content on external sites. Access to third-party websites is at your own risk.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground">Affiliate Disclosure:</strong> We may earn commissions from affiliate links to productivity tools, courses, or books. This does not affect the price you pay, and we only recommend products we believe may be valuable to our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Accuracy of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information, articles, or related graphics contained on the Service for any purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Any reliance you place on such information is strictly at your own risk. We reserve the right to modify or remove content at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Technical Limitations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Service is provided "as is" without warranty of any kind. We do not guarantee that:
            </p>
            <ul className="space-y-2">
              <li className="text-muted-foreground">The Service will be available at all times or without interruption</li>
              <li className="text-muted-foreground">The Service will be free from errors, bugs, or technical issues</li>
              <li className="text-muted-foreground">Data syncing across devices will be instantaneous or error-free</li>
              <li className="text-muted-foreground">The timer will function with 100% accuracy (minor variations may occur due to browser limitations)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We recommend backing up important data and not relying solely on the Service for critical time-sensitive tasks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Testimonials & User Experiences</h2>
            <p className="text-muted-foreground leading-relaxed">
              Testimonials and user reviews displayed on the Service reflect individual experiences and opinions. They are not verified claims of fact and do not represent typical results. Individual outcomes may vary significantly based on effort, circumstances, and external factors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. No Endorsement</h2>
            <p className="text-muted-foreground leading-relaxed">
              References to specific techniques, methodologies, books, or productivity frameworks (such as the Pomodoro Technique, Deep Work by Cal Newport, etc.) are for informational purposes only and do not constitute endorsement. Users should evaluate whether such methods are suitable for their individual needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Errors & Omissions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Despite our best efforts, the Service may contain typographical errors, inaccuracies, or omissions. We reserve the right to correct errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Fair Use Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service may include images, graphics, or references to third-party materials for educational or illustrative purposes. We believe such use constitutes "fair use" under copyright law. If you believe your work has been used improperly, please contact us at <a href="mailto:legal@focusloop.app" className="text-primary hover:underline">legal@focusloop.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Disclaimer from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the Service after changes constitutes acceptance of the updated Disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Disclaimer, contact us at:
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
