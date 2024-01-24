import ExperienceInterface from "../types/ExperienceInterface";

const experienceItems: ExperienceInterface[] = [
  {
    company: "Home Depot",
    dates: "Oct 2023 - Present",
    position: "Sr. Software Engineer",
    bullets: [
      "Led on time delivery of project to display personalized product listing advertisments (PLAs) within email campaigns which results in ~$25,000/week in ad spend from ~20 million impressions/week",
      "Facilitated Email PLAs project success by coordinating internal technical planning/development, driving communication with third-parties, and setting up robust monitoring and alerting",
      "Continuously supported the learning and growth of junior engineers through mentoring, support on tickets, and timely/constructive PR feedback",
    ],
  },
  {
    company: "Home Depot",
    dates: "March 2022 - Oct 2023",
    position: "Software Engineer II",
    bullets: [
      "Contributed to the development of a retail media platform for supplier self-service marketing campaign launches, performance monitoring, and advertisement management using React, Node/Express, and PostgreSQL",
      "Drove technical planning and on-time delivery of a new third-party payment integration through effective cross functional collaboration under a fixed contractual deadline resulting in billing cost reduction of 23%",
      "Improved developer efficiency and feature delivery time through the introduction of technologies such as the build tool NX, frontend global state management with Zustand, feature flags, and end-to-end testing with Cypress",
    ],
  },
  {
    company: "Fathom5",
    dates: "July 2021 - March 2022",
    position: "Jr. Design Engineer",
    bullets: [
      "Developed a full stack application in a fast-paced start-up environment to manage Navy sponsored hack-a-thons",
      "Collaborated with UI/UX team to create a React frontend with clear information architecture and cohesive style",
      "Designed Go microservice using gin framework for interfacing with PostgreSQL database",
    ],
  },
  {
    company: "SpaceX",
    dates: "Summer 2019/2020",
    position: "Manufacturing Engineering Intern",
    bullets: [
      "Refined manufacturing processes for the Falcon 9 launch vehicle through process, tooling, and planning improvement projects, resulting in a total yearly savings of ~$250,000",
      "Coordinated cross-functionally between four departments and drove to completion the testing, verification, and implementation of a new manufacturing process resulting in a 60% reduction in process time, saving $75,000/year",
      "Managed multiple projects through effective time management, prioritization, and communication of blockers",
      "Authored company-wide technical specifications, safety hazard assessments, and flight hardware process planning",
    ],
  },
];

export default experienceItems;
