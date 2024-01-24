import React from "react";
import ExperienceItem from "./ExperienceItem";
import experienceItems from "../config/ExperienceConfig";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900"
    >
      <div className="text-slate-200 text-3xl font-bold">Experience</div>
      {experienceItems.map((item) => (
        <ExperienceItem
          key={item.company}
          company={item.company}
          dates={item.dates}
          position={item.position}
          bullets={item.bullets}
        />
      ))}
    </div>
  );
};

export default Experience;
