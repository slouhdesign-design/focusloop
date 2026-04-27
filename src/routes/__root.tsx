import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/CookieConsent";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "focusloop — Deep work made simple." },
      { name: "description", content: "A calm, minimal Pomodoro timer that helps you focus, stay consistent, and achieve more." },
      { name: "author", content: "focusloop" },
      { name: "keywords", content: "pomodoro timer, focus timer, productivity, deep work, time management, focus app" },
      { name: "theme-color", content: "#FF5A5F" },
      
      // Open Graph (Facebook, LinkedIn)
      { property: "og:title", content: "focusloop — Deep work made simple." },
      { property: "og:description", content: "A calm, minimal Pomodoro timer for students, creators, and professionals who value focus." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://focusloop.app" },
      // TODO: Generate og-image.jpg (1200x630) - see public/FAVICON-INSTRUCTIONS.md
      // { property: "og:image", content: "https://focusloop.app/og-image.jpg" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "focusloop — Deep work made simple." },
      { name: "twitter:description", content: "A calm, minimal Pomodoro timer that helps you focus, stay consistent, and achieve more." },
      // TODO: Generate og-image.jpg (1200x630) - see public/FAVICON-INSTRUCTIONS.md
      // { name: "twitter:image", content: "https://focusloop.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      
      // Favicons - TODO: Generate using https://realfavicongenerator.net/
      // See public/FAVICON-INSTRUCTIONS.md for complete instructions
      // Uncomment these after generating favicons:
      // { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      // { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      // { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
      // { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      // { rel: "manifest", href: "/site.webmanifest" },
      
      // Fonts
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      
      // Canonical URL
      { rel: "canonical", href: "https://focusloop.app" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AuthProvider>
      <Outlet />
      <Toaster />
      <CookieConsent />
    </AuthProvider>
  );
}
