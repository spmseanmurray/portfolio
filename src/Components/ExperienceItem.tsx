import React from "react";
import ExperienceInterface from "../types/ExperienceInterface";
import { employerLogoMap } from "../utils/assets";

const ExperienceItem: React.FC<ExperienceInterface> = ({
  company,
  dates,
  position,
  bullets,
}) => {
  return (
    <div
      className={
        "border-slate-600 border-2 rounded-2xl bg-slate-800 my-3 mx-5 md:w-4/5 2xl:w-2/3 md:h-auto"
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center p-3 md:gap-x-8 border-b-2 border-slate-600">
          <div className="flex-row items-center justify-between md:justify-center">
            <div className="flex flex-row items-center gap-x-2 ">
              <img
                className="w-10 md:w-16 rounded-xl"
                src={employerLogoMap[company.replaceAll(" ", "").toLowerCase()]}
                alt={`${company} logo`}
                loading="lazy"
              />
              <div className="text-xl text-slate-200 font-bold"> {company}</div>
            </div>
            <div className="text-md text-slate-300 md:hidden text-center">
              {dates}
            </div>
          </div>
          <div className="text-xl text-sky-300 font-bold"> {position}</div>
          <div className="text-md text-slate-300 hidden md:flex">{dates}</div>
        </div>
        <ul className="text-m text-slate-300 mx-4 my-2 list-disc list-outside pl-4 space-y-1">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExperienceItem;
