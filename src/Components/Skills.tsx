import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import SkillItem from "./SkillItem";
import skillCategories from "../config/SkillConfig";

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="divide-y divide-rule">
        {skillCategories.map((item, index) => (
          <div key={item.category} className="py-6 first:pt-0 last:pb-0">
            <Reveal delay={index * 50}>
              <SkillItem category={item.category} skills={item.skills} />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Skills;
