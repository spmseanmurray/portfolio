import React from 'react';
import ProjectItem from './ProjectItem';
import projectItems from '../config/ProjectConfig';

const Projects: React.FC = () => {
    return (
        <div id="projects" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            {projectItems.map(item =>
                <ProjectItem name={item.name} description={item.description} image={item.image} link={item.link} github={item.github} tech={item.tech} />
            )}
        </div>
    );
}

export default Projects;