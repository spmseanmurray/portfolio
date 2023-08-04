import React from 'react'

const About: React.FC = () => {
    const ProfileImg = require('../images/SquareProfile.jpg');
    return (
        <div id="about" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            <div className="text-slate-200 text-3xl font-bold">About</div>
            <div className="flex flex-col lg:flex-row space-x-4 space-y-4 p-4 m-4 items-center border-2 bg-slate-800 border-slate-600 rounded-2xl">
                <img className="w-3/5 sm:max-w-xs h-auto rounded-full border-2 border-black" src={ProfileImg} alt={"Profile"} />
                <div className="max-w-prose text-slate-100">
                    After internships at BMW and SpaceX and graduating Summa cum laude from North Carolina State University with a B.S. in Aerospace Engineering, 
                    I started my professional career as a Jr. Design Engineer at Fathom5, a growth stage maritime cyber-security startup.
                    While at Fathom5, I made the transition from hardware and mechanical engineering to full-stack software development. 
                
                    <div className='mt-4' />

                    Following my time at Fathom5, I joined The Home Depot as a Software Engineer II where I am currently working in the marketing technology space.
                </div>

            </div>
        </div>
    );
}
export default About