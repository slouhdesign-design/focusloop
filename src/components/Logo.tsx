import { Link } from "@tanstack/react-router";
import logo from "@/assets/focusloop-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  /** "default" = dark text on light backgrounds; "light" = white text for dark backgrounds */
  variant?: "default" | "light";
}

export function Logo({ size = "md", showTagline = false, variant = "default" }: LogoProps) {
  const dim = size === "sm" ? 28 : size === "lg" ? 48 : size === "xl" ? 64 : 36;
  const text = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : size === "xl" ? "text-4xl" : "text-2xl";
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const taglineColor = variant === "light" ? "text-white/60" : "text-primary";

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group">
      <img
        src={logo}
        alt="focusloop logo"
        width={dim}
        height={dim}
        className="transition-transform group-hover:rotate-12 duration-500 drop-shadow-sm"
        style={{ width: dim, height: dim }}
      />
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tight ${text} ${textColor} transition-colors`}>focusloop</span>
        {showTagline && (
          <span className={`text-[11px] mt-0.5 tracking-wide ${taglineColor}`}>Deep work made simple.</span>
        )}
      </div>
    </Link>
  );
}
