import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import ExperienceItem from "./ExperienceItem";
import experienceItems from "../config/ExperienceConfig";

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      {/* Hairlines between roles rather than boxes around them. */}
      <div className="divide-y divide-rule">
        {experienceItems.map((item, index) => (
          // Two entries share the company name, so the dates disambiguate.
          <div
            key={`${item.company} ${item.dates}`}
            className="py-8 first:pt-0 last:pb-0"
          >
            <Reveal delay={index * 60}>
              <ExperienceItem
                company={item.company}
                dates={item.dates}
                position={item.position}
                bullets={item.bullets}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
