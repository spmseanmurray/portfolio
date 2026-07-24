import React from "react";
import Section from "./Section";
import ExperienceItem from "./ExperienceItem";
import experienceItems from "../config/ExperienceConfig";

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-6">
        {experienceItems.map((item) => (
          // Two entries share the company name, so the dates disambiguate.
          <ExperienceItem
            key={`${item.company} ${item.dates}`}
            company={item.company}
            dates={item.dates}
            position={item.position}
            bullets={item.bullets}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
