import ProjectInterface from "../types/ProjectInterface";
import EarthHero from "../images/EarthHero.png";
import TrainingLog from "../images/TrainingLog.png";
import BudgetingApp from "../images/BudgetingApp.png";

const projectItems: ProjectInterface[] = [
  {
    // The role moved into `context`, so the name can just be the project.
    name: "Earth Hero",
    context: "Volunteer Sr. Web Developer",
    description:
      "Earth Hero provides scientifically grounded tools and ideas to empower all who want to reduce emissions, improve lives, and care for our shared planet.",
    image: EarthHero,
    link: "https://www.earthhero.org/",
    tech: ["react", "javascript", "typescript", "html5", "css3", "material-ui"],
  },
  {
    name: "Triathlon Training Analysis",
    context: "Personal project",
    description:
      "Interfaced with the Strava fitness app REST API using OAuth 2.0 authentication to access athlete activity data and provide insightful time-series training data and visualization",
    image: TrainingLog,
    // Live demo has been retired; source remains available.
    github: "https://github.com/mgmer/justtraininglog",
    tech: ["react", "javascript", "html5", "css3", "mongodb"],
  },
  {
    name: "Budget Tracking",
    context: "Personal project",
    description:
      "Co-developed financial tracking web application which records and analyzes income and expenses by category to provide an improved personal budgeting experience over previous spreadsheet solution",
    image: BudgetingApp,
    // Live demo has been retired; source remains available.
    github: "https://github.com/Jemeline/js-budgeting",
    tech: ["react", "javascript", "html5", "css3", "mongodb"],
  },
];
export default projectItems;
