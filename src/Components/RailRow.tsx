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
 */
const RailRow: React.FC<RailRowProps> = ({ label, sublabel, children }) => {
  return (
    <div className="grid gap-x-10 gap-y-2 md:grid-cols-[10.5rem_1fr]">
      <div className="pt-1 text-xs uppercase tracking-[0.14em] text-accent tabular-nums">
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
