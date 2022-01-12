import React from 'react'

export interface ProjectItemProps {
    name: string,
    description: string,
    image: string,
    link: string,
    featured: boolean
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, image, link, featured, ...props }) => {
    return (
        <div className={`text-p font-bold hover:text-p-hov border-p border-2 rounded-md hover:border-p-hov}`}>
            <a href={link} target="_blank">
                <img src={image}/>
            </a>
            <div className='grid-cols-1 justify-start text-white mx-5'>
                <div className='text-2xl'>
                    {name}
                </div>
                <div className='text-m'>
                    {description}
                </div>
            </div>
        </div>
    );
}
export default ProjectItem