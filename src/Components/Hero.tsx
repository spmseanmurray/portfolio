import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import HeroContours from "./HeroContours";

const Hero: React.FC = () => {
  const staggerRef = useRef<HTMLDivElement>(null);

  // CSS sets opacity: 0 inside prefers-reduced-motion: no-preference and
  // relies on the animation to reveal it. If the animation never runs
  // (headless renderer, broken compositor) the hero stays invisible. This
  // mirrors Reveal's fail-safe: force visibility after a beat.
  useEffect(() => {
    const node = staggerRef.current;
    if (!node) return;
    const timer = window.setTimeout(() => {
      for (const child of Array.from(node.children)) {
        (child as HTMLElement).style.opacity = "1";
      }
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      id="top"
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-ground px-5 py-24"
    >
      <HeroContours />
      <div
        ref={staggerRef}
        className="hero-stagger relative mx-auto w-full max-w-6xl"
      >
        <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl xl:text-7xl">
          Sean Murray
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">
          Aerospace engineer turned{" "}
          <span className="hero-mark bg-accent px-2 font-semibold text-on-accent">
            full stack software engineer
          </span>
        </p>
        <p className="mt-5 max-w-xl leading-relaxed text-body">
          Six years of full stack experience, delivering scalable solutions to
          complex business challenges through technical leadership.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#about"
            className="group inline-flex items-center gap-x-2 border-b border-accent pb-1 text-sm text-ink transition-colors hover:text-accent"
          >
            Learn more
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
          <p className="flex items-center gap-x-2 text-sm text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            Open to new opportunities
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
