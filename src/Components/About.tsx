import React from 'react'

const About: React.FC = () => {
    const ProfileImg = require('../images/SquareProfile.jpg');
    return (
        <div id="about" className="snap-start min-h-full my-20 flex flex-col justify-center items-center bg-slate-900">
            <div className="text-slate-200 text-3xl font-bold">About</div>
            <div className="flex flex-col lg:flex-row space-x-4 space-y-4 p-4 m-4 items-center border-2 bg-slate-800 border-slate-600 rounded-2xl">
                <img className="w-3/5 sm:max-w-xs h-auto rounded-full border-2 border-black" src={ProfileImg} alt={"Profile Picture"} />
                <div className="max-w-prose text-slate-100">
                    I moved to Austin, TX after graduating Summa cum laude from North Carolina State University with a B.S. in Aerospace Engineering.
                    Since then I have been leverging my problem-solving, attention to detail, and desire to constantly learn as a Jr. Design Engineer
                    at a growth stage maritime cyber-security startup called Fathom5. At Fathom5, I made the transition from hardware/mechanical engineering
                    to full-stack software development.
                    <div className='mt-4'>
                        Since then, I've been hooked! Using the abundance of resources online I have been self-teaching myself the fundamentals of software development,
                        working on personal projects, and just generally loving the process of emersing myself in this exciting field. As part of my learning process,
                        I have completed the following courses:
                    </div>
                    <div className='mt-4 text-slate-200'>
                        <a href={"https://www.udemy.com/certificate/UC-fa5befbd-a899-49a4-902e-3ab376ca9b81/"} target="_blank" rel="noreferrer">
                            <li>Udemy: Data Structures and Algorithms</li>
                        </a>
                        <a href={"https://www.freecodecamp.org/certification/spmseanmurray/javascript-algorithms-and-data-structures"} target="_blank" rel="noreferrer">
                            <li>FreeCodeCamp: Javascript</li>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default About