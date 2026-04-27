import { useState } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/focusloop-logo.png";
import { subscribeToNewsletter } from "@/lib/newsletter";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        toast.success(result.message);
        setEmail("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-soft">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <img src={logo} alt="focusloop" className="size-10 drop-shadow-sm" />
          <div className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10">
            <Mail className="size-5 text-primary" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Get Productivity Tips in Your Inbox
        </h3>
        <p className="text-muted-foreground mb-6">
          Join 10,000+ focused professionals. Weekly deep work strategies, productivity research, and focusloop updates. No spam, ever.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            disabled={loading}
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={loading}
            className="sm:min-w-[140px]"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe anytime. Read our{" "}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
