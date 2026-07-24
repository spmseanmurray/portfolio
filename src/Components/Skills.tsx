import React from "react";
import Section from "./Section";
import SkillItem from "./SkillItem";
import skillCategories from "../config/SkillConfig";

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillCategories.map((item) => (
          <SkillItem
            key={item.category}
            category={item.category}
            skills={item.skills}
          />
        ))}
      </div>
    </Section>
  );
};
export default Skills;
