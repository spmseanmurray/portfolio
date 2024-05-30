import ProjectInterface from "../types/ProjectInterface";

const projectItems: ProjectInterface[] = [
  {
    name: "Earth Hero - Volunteer Senior Web Developer",
    description:
      "Earth Hero provides scientifically grounded tools and ideas to empower all who want to reduce emissions, improve lives, and care for our shared planet.",
    image: require("../images/EarthHero.png"),
    link: "https://www.earthhero.org/",
    tech: ["react", "javascript", "typescript", "html5", "css3", "material-ui"],
  },
  {
    name: "Triathlon Training Analysis",
    description:
      "Interfaced with the Strava fitness app REST API using OAuth 2.0 authentication to access athlete activity data and provide insightful time-series training data and visualization",
    image: require("../images/TrainingLog.png"),
    link: "http://justtraininglog.com",
    github: "https://github.com/mgmer/justtraininglog",
    tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"],
  },
  {
    name: "Budget Tracking",
    description:
      "Co-developed financial tracking web application which records and analyzes income and expenses by category to provide an improved personal budgeting experience over previous spreadsheet solution",
    image: require("../images/BudgetingApp.png"),
    link: "https://www.jsbudget.com/login",
    github: "https://github.com/Jemeline/js-budgeting",
    tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"],
  },
];
export default projectItems;
