import React from 'react'

const About: React.FC = () => {
    const ProfileImg = require('../images/SquareProfile.jpg');
    return (
        <div id="about" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            <div className="text-slate-200 text-3xl font-bold">About</div>
            <div className="flex flex-col lg:flex-row space-x-4 space-y-4 p-4 m-4 items-center border-2 bg-slate-800 border-slate-600 rounded-2xl">
                <img className="w-3/5 sm:max-w-xs h-auto rounded-full border-2 border-black" src={ProfileImg} alt={"Profile"} />
                <div className="max-w-prose text-slate-100">
                    Hello, I'm Sean Murray—a proud graduate in Aerospace Engineering from North Carolina State University. 
                    My journey began with notable internships at both BMW and SpaceX, kindling my intrigue for pushing technological boundaries and embracing novel challenges. 
                    Following graduation, Austin, TX beckoned, leading me to immerse myself in the dynamic startup world at Fathom5, a maritime cyber-security venture. 
                    This experience enabled me to seamlessly transition from my aerospace roots into the realm of full-stack software engineering.
                <div className='mt-4' />
                    Today my professional pursuits continue as a Software Engineer II at The Home Depot. 
                    I dedicate myself to honing and expanding my technical expertise while steering the evolution of a supplier-centric retail media platform. 
                    This platform orchestrates self-service marketing campaign launches, meticulous performance tracking, and streamlined advertisement management.
                <div className='mt-4' />
                    Beyond coding, you'll find me reading or fully immersed in the great outdoors. 
                    Whether I'm hitting the pavement for a run, traversing hiking trails, or exploring the wilderness on backpacking trips, I relish every moment of adventure.
                </div>
            </div>
        </div>
    );
}
export default About