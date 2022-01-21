import React from 'react'
import SkillItem, { SkillProps } from './SkillItem';

const skillCategories: SkillProps[] = [
    {
        category: "Front End Languages",
        skills: ["javascript", "html5", "css3", "typescript",]
    },
    {
        category: "Front End Frameworks and Libraries",
        skills: ["react", "material-ui", "tailwindcss", "bootstrap"]
    },
    {
        category: "Back End Languages and Databases",
        skills: ["nodejs", "golang", "heroku", "postgresql"]
    },
    {
        category: "Tools",
        skills: ["github", "vscode", "npm", "jira",]
    },
]

const Skills: React.FC = ({ }) => {
    return (
        <div className="flex justify-center">
        <div className=" flex flex-col items-center">
            {skillCategories.map(item =>
                <div className="mx-16 my-3">
                    <SkillItem category={item.category} skills={item.skills}/>
                </div>
            )}
        </div>
    </div>
    );
}
export default Skills