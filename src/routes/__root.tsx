import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, useCallback, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { IntroAnimation } from "@/components/site/IntroAnimation";

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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Charminar Biryani | Zafrani Hyderabadi Dum Biryani" },
      {
        name: "description",
        content:
          "Authentic Zafrani Hyderabadi dum biryani in Hyderabad. Order online, reserve a table or book catering with Charminar Biryani.",
      },
      { name: "author", content: "Charminar Biryani" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=DM+Sans:wght@400;500;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  // Show intro only once per browser session. sessionStorage only exists in the
  // browser, so decide after hydration (null = undecided) to keep the server and
  // client renders identical; the page stays hidden until the decision is made.
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    let played = false;
    try {
      played = !!sessionStorage.getItem("charminar_intro_played");
    } catch {
      played = true; // storage blocked: skip the intro
    }
    setShowIntro(!played);
  }, []);

  // Lock scroll while intro plays
  useEffect(() => {
    if (showIntro) {
      document.body.classList.add("intro-playing");
    }
    return () => {
      document.body.classList.remove("intro-playing");
    };
  }, [showIntro]);

  const handleIntroComplete = useCallback(() => {
    try {
      sessionStorage.setItem("charminar_intro_played", "1");
    } catch {
      // storage blocked: intro will simply play again next load
    }
    document.body.classList.remove("intro-playing");
    setShowIntro(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      <div style={{ visibility: showIntro === false ? "visible" : "hidden" }}>
        <SiteHeader />
        <main>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
