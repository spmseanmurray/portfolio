import React from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Shared wrapper for the page's major sections.
 *
 * Section names are set as quiet labels rather than large headings: in this
 * layout the loud type is reserved for content — employers, project names —
 * so the page reads as a document rather than a stack of billboards. They stay
 * real <h2> elements for structure regardless of how they're styled.
 */
const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24 py-section">
      <div className="mx-auto w-full max-w-5xl px-5">
        <Reveal>
          <h2 className="border-b border-rule pb-3 text-xs uppercase tracking-[0.18em] text-faint">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
};

export default Section;
