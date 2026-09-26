import { useEffect, useState } from "react";

/**
 * Intro animation for Charminar Biryani.
 * Phase 1 (0–1.2s)  : Logo drops in from above.
 * Phase 2 (1.2–2.8s): Brand name fades in below.
 * Phase 3 (2.8–3.8s): Whole overlay fades out → home page revealed.
 */

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "name" | "fade" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("name"), 1200);
    const t2 = setTimeout(() => setPhase("fade"), 2800);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={["intro-overlay", phase === "fade" ? "intro-overlay--fade" : ""].join(" ")}
    >
      {/* Subtle dot texture */}
      <div className="intro-stars" />

      {/* Logo + name */}
      <div className="intro-brand">
        <div className="intro-logo">
          <img src="/logo-navy.svg" alt="Charminar Biryani" className="intro-logo__img" />
        </div>

        <div
          className={[
            "intro-name",
            phase === "name" || phase === "fade" ? "intro-name--visible" : "",
          ].join(" ")}
        >
          <p className="intro-name__tagline">The Taste of Hyderabad, Served with Zafrani Royalty</p>
        </div>
      </div>

      {/* Bottom ornament line */}
      <div className="intro-ornament" />
    </div>
  );
}
