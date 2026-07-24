import React from "react";
import { CircleArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div
      id="top"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-ground px-5 py-24 text-center"
    >
      <h1 className="font-display text-6xl font-semibold tracking-tight text-ink">
        Sean Murray
      </h1>
      <p className="mt-4 text-xl font-semibold text-accent">
        Aerospace engineer turned full stack software engineer
      </p>
      <p className="mt-4 max-w-prose text-muted">
        Six years of full stack experience, delivering scalable solutions to
        complex business challenges through technical leadership.
      </p>
      <p className="mt-6 flex items-center gap-x-2 text-sm text-muted">
        <span
          className="h-2 w-2 rounded-full bg-accent"
          aria-hidden="true"
        />
        Open to new opportunities
      </p>
      <a href="#about" className="mt-8">
        <button className="flex items-center gap-x-3 rounded-full border border-rule px-4 py-2 text-ink transition-colors hover:border-accent hover:text-accent">
          <span>View my work</span>
          <CircleArrowDown size={18} />
        </button>
      </a>
    </div>
  );
};
export default Hero;
