import React from 'react'
import SkillItem from './SkillItem';
import skillCategories from '../config/SkillConfig';

const Skills: React.FC = ({ }) => {
    return (
        <div id="skills" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            {skillCategories.map(item =>
                <div className="mx-16 my-3">
                    <SkillItem category={item.category} skills={item.skills} />
                </div>
            )}
        </div>
    );
}
export default Skills