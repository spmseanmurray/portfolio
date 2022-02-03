import React from 'react';
import ProjectItem from './ProjectItem';
import projectItems from '../config/ProjectConfig';

const Projects: React.FC = () => {
    return (
        <div id="projects" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            <div className="text-slate-200 text-3xl font-bold">Projects</div>
            <div className="flex flex-col lg:flex-row items-center">
                {projectItems.map(item =>
                    <ProjectItem key={item.name} name={item.name} description={item.description} image={item.image} link={item.link} github={item.github} tech={item.tech} />
                )}
            </div>
        </div>
    );
}

export default Projects;