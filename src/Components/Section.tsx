import React from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section className="pt-section">
      <div id={id} className="mx-auto w-full max-w-6xl px-5">
        <Reveal>
          <h2 className="border-b border-rule pb-3 text-xs uppercase tracking-[0.18em] text-faint">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 pb-section">{children}</div>
      </div>
    </section>
  );
};

export default Section;
