import React from 'react';
import ExperienceItem from './ExperienceItem';
import { ExperienceItemProps } from './ExperienceItem';

const Experience: React.FC = () => {

    const experienceItems: ExperienceItemProps[] = [
        {
            company: "Fathom5",
            startDate: "June 2021",
            endDate: "Present",
            position: "Jr. Design Engineer",
            bullets: ["Developed custom website for navy sponsered hackathon",
                "Embedded rotary system control system design using C++ arduino open source platform",
                "Designed and developed electrical hardware and software system communicating using CANBUS J1939 communication"],
        },
        {
            company: "SpaceX",
            startDate: "May 2020",
            endDate: "August 2020",
            position: "Advanced Manufacturing Engineering Intern",
            bullets: ["Developed custom website for navy sponsered hackathon",
                "Embedded rotary system control system design using C++ arduino open source platform",
                "Designed and developed electrical hardware and software system communicating using CANBUS J1939 communication"],
        },
        {
            company: "SpaceX",
            startDate: "May 2019",
            endDate: "August 2019",
            position: "Manufacturing Engineering Intern",
            bullets: ["Developed custom website for navy sponsered hackathon",
                "Embedded rotary system control system design using C++ arduino open source platform",
                "Designed and developed electrical hardware and software system communicating using CANBUS J1939 communication"],
        },
    ]

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
                {experienceItems.map(item =>
                    <ExperienceItem company={item.company} startDate={item.startDate} endDate={item.endDate} position={item.position} bullets={item.bullets}/>
                )}
            </div>
        </div>
    );
}

export default Experience;