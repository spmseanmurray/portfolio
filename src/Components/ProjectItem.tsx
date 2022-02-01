import React from 'react'
import ProjectInterface from '../types/ProjectInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectItem: React.FC<ProjectInterface> = ({ name, description, image, link, github, tech, ...props }) => {
    return (
        < div className={'border-slate-600 border-2 rounded-2xl bg-slate-800 my-3 mx-5'} >
            <img className="object-cover rounded-t-2xl border-b-2 border-slate-600" src={image} alt={name + "image"} />
            <div className='justify-start align-center text-slate-200 p-3'>
                <div className='text-xl text-sky-300 font-bold'>
                    {name}
                    <a href={github} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="text-slate-200 mx-3" icon={faGithubAlt} />
                    </a>
                    <a href={link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="text-slate-200" icon={faExternalLinkAlt} />
                    </a>
                </div>
                <div className='text-m lg:h-24 xl:h-16'>
                    {description}
                </div>
            </div>
            <div className="flex justify-evenly flex-row mx-3 border-t-2 border-slate-600">
                {tech.map(tech => {
                    const techIcon = require("../images/tech/" + tech + ".png");
                    return (
                        <div className="flex flex-col items-center justify-center mx-4 my-1">
                            <img className="w-10 h-10 mb-1" src={techIcon} alt={tech} key={tech} />
                        </div>)
                })}
            </div>
        </div >
    );
}
export default ProjectItem