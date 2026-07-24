import React from "react";
import { CircleArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div
      id="top"
      className="flex flex-col items-center justify-center h-screen bg-slate-900 px-5 text-center"
    >
      <h1 className="text-6xl font-bold text-sky-300 mx-14">SEAN MURRAY</h1>
      <p className="text-2xl font-bold text-slate-200 mt-2">
        Aerospace engineer turned full stack software engineer
      </p>
      <p className="max-w-prose text-slate-400 mt-3">
        Six years of full stack experience, delivering scalable solutions to
        complex business challenges through technical leadership.
      </p>
      <p className="flex items-center gap-x-2 text-sm text-slate-400 mt-4">
        <span
          className="h-2 w-2 rounded-full bg-emerald-400"
          aria-hidden="true"
        />
        Open to new opportunities
      </p>
      <a href="#about">
        <button className="flex justify-center border-2 rounded-2xl border-slate-400 text-slate-200 hover:text-slate-100 p-2 mt-6 hover:bg-gray-800">
          <div className="mr-3">Interested? Learn more!</div>
          <div>
            <CircleArrowDown size={20} />
          </div>
        </button>
      </a>
    </div>
  );
};
export default Hero;
