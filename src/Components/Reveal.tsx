import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

/**
 * Fades content up as it scrolls into view.
 *
 * Anyone who prefers reduced motion — or whose browser lacks
 * IntersectionObserver — gets the content immediately and unanimated, so the
 * effect is never load-bearing for readability.
 */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    // Content must never depend on the observer firing to become visible.
    // Some renderers (headless browsers, preview and crawler bots) never
    // deliver a callback, and the failure mode there is a blank page rather
    // than a missing animation, so reveal unconditionally after a beat.
    const failSafe = window.setTimeout(() => setShown(true), 1200);

    return () => {
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Reveal;
