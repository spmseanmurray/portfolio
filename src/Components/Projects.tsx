import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectItemProps } from './ProjectItem';

const Projects: React.FC = () => {

    const projectItems: ProjectItemProps[] = [
        {
            name: 'Triathlon Training Log',
            description: 'Users connect their JustTrainingLog account to Strava inorder to access insightful training data and visualization',
            image: require('../images/TrainingLog.png'),
            link: 'https://github.com/mgmer/justtraininglog',
            featured: false
        },
        {
            name: 'Personal Budgeting App',
            description: 'Tracking spending and income by catagory to understand where you money is going',
            image: require('../images/BudgetingApp.png'),
            link: 'https://github.com/Jemeline/js-budgeting',
            featured: false
        },
    ]

    return (
        <div className="container mx-auto flex flex-row justify place-content-between py-3 ">
            <div className=" flex items-center ">
                {projectItems.map(item =>
                    <div className=" px-3">
                        <ProjectItem name={item.name} description={item.description} image={item.image} link={item.link} featured={item.featured} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;