import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import SkillItem from "./SkillItem";
import skillCategories from "../config/SkillConfig";

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      {/*
        No `first:pt-0` here, unlike the other sections. Skill rows are thin --
        a single line of marks in a fixed-height rail -- so they read as a
        stack of even bands, and dropping the first row's top padding left its
        marks flush against the row edge while every other row sat 24px in.
        On the taller rows in Experience and Projects that 24px is lost against
        200px of content; here it was the difference the eye landed on.
      */}
      <div className="divide-y divide-rule">
        {skillCategories.map((item, index) => (
          <div key={item.category} className="py-6 last:pb-0">
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
