import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { useAuth } from "@/lib/auth";
import { LogOut } from "lucide-react";

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        <Logo size="md" />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Home
          </Link>
          <Link to="/timer" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Timer
          </Link>
          <Link to="/blog" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Blog
          </Link>
          {user && (
            <Link to="/stats" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
              Stats
            </Link>
          )}
          <Link to="/contact" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                await signOut();
                navigate({ to: "/" });
              }}
            >
              <LogOut className="size-4" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Sign in</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/timer">Start focusing</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
