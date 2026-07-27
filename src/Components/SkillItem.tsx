import React from "react";
import SkillInterface from "../types/SkillInterface";
import RailRow from "./RailRow";
import { techIcons } from "./icons/techIcons";

const SkillItem: React.FC<SkillInterface> = ({ category, skills }) => {
  return (
    <RailRow label={category}>
      {/*
        `h-full` plus centring so the marks sit in the middle of the height the
        rail reserves for a two-line label. Left at the default they pin to the
        top and all the slack collects underneath, which tips every band
        top-heavy against the divider below it.
      */}
      <div className="flex h-full flex-wrap content-center items-center gap-x-6 gap-y-4">
        {skills.map((skill) => {
          const entry = techIcons[skill];
          if (!entry) return null;
          const Icon = entry.icon;
          return (
            <div
              key={skill}
              className="flex items-center gap-x-2 text-sm text-body"
            >
              <Icon size={20} color={entry.color} title={entry.label} />
              {entry.label}
            </div>
          );
        })}
      </div>
    </RailRow>
  );
};
export default SkillItem;
