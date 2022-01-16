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
        < div className={'border-p border-2 rounded-md hover:border-slate-400 '} >
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt={name + "image"} />
            </a>
            <div className='grid-cols-1 justify-start text-slate-100 hover:text-slate-400 mx-5'>
                <div className='text-xl text-sky-300 font-bold'>
                    {name}
                </div>
                <div className='text-m'>
                    {description}
                </div>
            </div>
        </div >
    );
}
export default ProjectItem