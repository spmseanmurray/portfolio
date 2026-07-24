import React from "react";
import { ArrowDown } from "lucide-react";
import HeroContours from "./HeroContours";

const Hero: React.FC = () => {
  return (
    <div
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden bg-ground px-5 py-24"
    >
      {/*
        The hero deliberately holds a full screen: the "Learn more" cue
        only means anything if the work is below the fold. svh rather than
        vh so mobile browser chrome doesn't push the CTA out of view.
      */}
      <HeroContours />
      <div className="hero-stagger relative mx-auto w-full max-w-6xl">
        {/*
          The serif display and painted accent mark carry the hero, but the
          name stays on one line at a moderate scale rather than stacking --
          the stacked treatment reads as a statement piece, which is louder
          than this page wants to be.
        */}
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
