import React from 'react'
import SkillItem from './SkillItem';
import skillCategories from '../config/SkillConfig';

const Skills: React.FC = () => {
    return (
        <div id="skills" className="snap-start min-h-full my-20 mx-5 flex flex-col justify-center items-center bg-slate-900">
            <div className="text-slate-200 text-3xl font-bold">Skills</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-8 mt-4">
                {skillCategories.map(item =>
                    <SkillItem key={item.category} category={item.category} skills={item.skills} />
                )}
            </div>
        </div>
    );
}
export default Skills