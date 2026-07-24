import React from "react";
import Section from "./Section";
import ProjectItem from "./ProjectItem";
import projectItems from "../config/ProjectConfig";

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projectItems.map((item) => (
          <ProjectItem
            key={item.name}
            name={item.name}
            description={item.description}
            image={item.image}
            link={item.link}
            github={item.github}
            tech={item.tech}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
