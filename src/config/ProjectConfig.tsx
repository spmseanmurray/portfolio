import ProjectInterface from "../types/ProjectInterface";

const projectItems: ProjectInterface[] = [
    {
        name: 'Triathlon Training Analysis',
        description: 'Interfaced with the Strava fitness app REST API using OAuth 2.0 authentication to access athlete activity data and provide insightful time-series training data and visualization',
        image: require('../images/TrainingLog.png'),
        link: "http://justtraininglog.com",
        github: 'https://github.com/mgmer/justtraininglog',
        tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"]
    },
    {
        name: 'Budget Tracking',
        description: 'Co-developed financial tracking web application which records and analyzes income and expenses by category to provide an improved personal budgeting experience over previous spreadsheet solution',
        image: require('../images/BudgetingApp.png'),
        link: "https://shielded-eyrie-13978.herokuapp.com/",
        github: 'https://github.com/Jemeline/js-budgeting',
        tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"]
    }
]
export default projectItems