import ExperienceInterface from '../types/ExperienceInterface';

const experienceItems: ExperienceInterface[] = [
    {
        company: "Fathom5",
        dates: "July 2021 - Present",
        position: "Jr. Design Engineer",
        bullets: [
            "Developed a full stack application in a fast-paced start-up environment to manage Navy sponsored hack-a-thons",
            "Collaborated with UI/UX team to create a React frontend with clear information architecture and cohesive style",
            "Designed Go microservice using gin framework for interfacing with PostgreSQL database"
        ],
    },
    {
        company: "SpaceX",
        dates: "Summer 2019/2022",
        position: "Manufacturing Engineering Intern",
        bullets: [
            "Refined manufacturing processes for the Falcon 9 launch vehicle through process, tooling, and planning improvement projects, resulting in a total yearly savings of ~$250,000",
            "Coordinated cross-functionally between four departments and drove to completion the testing, verification, and implementation of a new manufacturing process resulting in a 60% reduction in process time, saving $75,000/year",
            "Managed multiple projects through effective time management, prioritization, and communication of blockers",
            "Authored company-wide technical specifications, safety hazard assessments, and flight hardware process planning"
        ],
    },
]

export default experienceItems