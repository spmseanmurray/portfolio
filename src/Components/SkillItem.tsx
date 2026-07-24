import React from "react";
import SkillInterface from "../types/SkillInterface";
import { techIcons } from "./icons/techIcons";

const SkillItem: React.FC<SkillInterface> = ({ category, skills }) => {
  return (
    <div className="rounded-xl border border-rule bg-surface p-5">
      <h3 className="text-center font-display text-lg font-semibold text-accent">
        {category}
      </h3>
      <div className="mt-4 flex flex-wrap items-start justify-center gap-x-6 gap-y-4 border-t border-rule pt-4">
        {skills.map((skill) => {
          const entry = techIcons[skill];
          if (!entry) return null;
          const Icon = entry.icon;
          return (
            <div
              key={skill}
              className="flex w-20 flex-col items-center gap-y-2 text-center text-xs text-muted"
            >
              <Icon size={44} color={entry.color} title={entry.label} />
              {entry.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SkillItem;
