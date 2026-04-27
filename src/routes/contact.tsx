import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | focusloop" },
      { name: "description", content: "Get in touch with the focusloop team. We're here to help with questions, feedback, or support requests." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const result = await sendContactMessage({
        data: formData,
      });
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    disabled={loading}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    disabled={loading}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    disabled={loading}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="premium">Premium Subscription</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    disabled={loading}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  <Send className="size-4" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours. By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 md:order-2">
              <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:hello@focusloop.app" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        hello@focusloop.app
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        General inquiries & support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Support</div>
                      <a href="mailto:support@focusloop.app" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        support@focusloop.app
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Technical issues & bugs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40">
                  <h3 className="font-semibold mb-4">Response Time</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• General inquiries: 24-48 hours</li>
                    <li>• Technical support: 2-3 business days</li>
                    <li>• We do our best to reply as quickly as possible</li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM (CET)
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respond to emails outside these hours, but expect slightly longer response times.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-coral/10 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">Looking for faster answers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check our FAQ section for common questions about the Pomodoro Technique, account management, and features.
                </p>
                <a href="/#faq" className="text-primary text-sm font-medium hover:underline">
                  Visit FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
