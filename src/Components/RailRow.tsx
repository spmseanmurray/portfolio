import React from "react";

interface RailRowProps {
  label: string;
  sublabel?: string;
  children: React.ReactNode;
}

/**
 * The page's structural spine.
 *
 * Metadata lives in a fixed-width left rail so that dates and employers align
 * down a single edge no matter how long the prose beside them runs, which is
 * what makes the work history scannable in a few seconds. Below the md
 * breakpoint the rail stacks above its content rather than shrinking.
 *
 * The label reserves two lines of height on the rail. Several labels are long
 * enough to wrap in 10.5rem and several are not, and where the content beside
 * them is shorter than the label -- the skill rows, which are a single line of
 * marks -- the wrap is what sets the row height. That made the rhythm depend
 * on the length of a category name rather than on its content, so rows with a
 * wrapping label sat 16px taller than their neighbours. Reserving the second
 * line up front makes every such row match. Rows whose content is taller than
 * the label are unaffected, which is every row outside Skills.
 *
 * Only above md: below it the rail stacks above the content, where an unused
 * second line would just open a gap between a label and the thing it names.
 */
const RailRow: React.FC<RailRowProps> = ({ label, sublabel, children }) => {
  return (
    <div className="grid gap-x-10 gap-y-2 md:grid-cols-[10.5rem_1fr]">
      <div className="pt-1 text-xs uppercase tracking-[0.14em] text-accent tabular-nums md:min-h-9">
        {label}
        {sublabel ? (
          <span className="mt-1 block tracking-[0.06em] text-muted">
            {sublabel}
          </span>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default RailRow;
