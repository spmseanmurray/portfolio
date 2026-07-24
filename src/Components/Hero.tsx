import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div
      id="top"
      className="flex items-center bg-ground px-5 py-28 lg:py-40"
    >
      {/*
        Sized by padding rather than viewport height. A vh-based hero puts a
        fixed slab of content in a box that grows with the screen, so the
        taller the display the emptier it looks -- 71% dead space at 1060px.
        Padding keeps that gap constant instead.
      */}
      <div className="mx-auto w-full max-w-6xl">
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
          <span className="bg-accent px-2 font-semibold text-on-accent">
            full stack software engineer
          </span>
        </p>
        <p className="mt-5 max-w-xl leading-relaxed text-body">
          Six years of full stack experience, delivering scalable solutions to
          complex business challenges through technical leadership.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#experience"
            className="group inline-flex items-center gap-x-2 border-b border-accent pb-1 text-sm text-ink transition-colors hover:text-accent"
          >
            View my work
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
