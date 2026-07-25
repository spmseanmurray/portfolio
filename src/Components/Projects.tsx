import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectItem from "./ProjectItem";
import projectItems from "../config/ProjectConfig";

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-rule">
        {projectItems.map((item, index) => (
          <div key={item.name} className="py-8 first:pt-0 last:pb-0">
            <Reveal delay={index * 60}>
              <ProjectItem
                name={item.name}
                context={item.context}
                description={item.description}
                image={item.image}
                link={item.link}
                github={item.github}
                tech={item.tech}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
