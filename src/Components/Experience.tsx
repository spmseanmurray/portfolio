import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceItems from '../config/ExperienceConfig';

const Experience: React.FC = () => { 
    return (
        <div id="experience" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            {experienceItems.map(item =>
                <ExperienceItem company={item.company} startDate={item.startDate} endDate={item.endDate} position={item.position} bullets={item.bullets} />
            )}
        </div>
    );
}

export default Experience;