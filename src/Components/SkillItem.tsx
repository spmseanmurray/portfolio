import React from "react";
import SkillInterface from "../types/SkillInterface";
import { techIcons } from "./icons/techIcons";

const SkillItem: React.FC<SkillInterface> = ({ category, skills }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col flex-wrap items-center bg-slate-800 border-2 border-slate-600 rounded-2xl">
        <div className="flex text-center mx-5 text-xl mt-1 text-sky-300 font-bold">
          {category}
        </div>
        <div className="flex flex-wrap items-center m-2 justify-evenly border-t-2 border-slate-600">
          {skills.map((skill) => {
            const entry = techIcons[skill];
            const Icon = entry?.icon;
            return (
              <div
                key={skill}
                className="flex flex-col items-center justify-center mx-4 my-1 text-slate-400"
              >
                {Icon ? (
                  <Icon
                    size={64}
                    color={entry.hex}
                    className="mb-1"
                    title={skill}
                  />
                ) : null}
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SkillItem;
