import ProjectInterface from "../types/ProjectInterface";

const projectItems: ProjectInterface[] = [
    {
        name: 'Triathlon Training Log',
        description: 'Users connect their JustTrainingLog account to Strava inorder to access insightful training data and visualization',
        image: require('../images/TrainingLog.png'),
        link: "http://justtraininglog.com",
        github: 'https://github.com/mgmer/justtraininglog',
        tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"]
    },
    {
        name: 'Personal Budgeting App',
        description: 'Tracking spending and income by catagory to understand where you money is going',
        image: require('../images/BudgetingApp.png'),
        link: "https://shielded-eyrie-13978.herokuapp.com/",
        github: 'https://github.com/Jemeline/js-budgeting',
        tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"]
    }
]
export default projectItems