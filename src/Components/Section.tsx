import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Shared wrapper for the page's major sections.
 *
 * Sections size to their content rather than being pinned to the viewport,
 * which is what previously left the hero and projects two-thirds empty while
 * skills ran wall to wall. Vertical rhythm comes from a single token so every
 * section breathes identically.
 */
const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-section scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
};

export default Section;
