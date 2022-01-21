import React from 'react'

export interface SkillProps {
    category: string,
    skills: string[]
}

const SkillItem: React.FC<SkillProps> = ({ category, skills, ...props }) => {

    return (
        <div className="flex justify-center">
            <div className="flex flex-col flex-wrap items-center bg-slate-800 border-2 border-slate-600 rounded-2xl">
            <div className="text-xl mt-1 text-sky-300 font-bold">
                {category}
            </div>
            <div className="flex flex-wrap items-center m-2 justify-evenly border-t-2 border-slate-600">
                {skills.map(skill => {
                    const skillIcon = require("../images/tech/" + skill + ".png");
                    return (
                        <div className="flex flex-col items-center justify-center mx-4 my-1 text-slate-400">
                            <img className="w-24 h-24 mb-1" src={skillIcon} alt={skill} key={skill} />
                            {skill}
                        </div>)
                })}
            </div>
        </div>
        </div >
    );
}
export default SkillItem