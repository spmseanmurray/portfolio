import React from 'react'

const About: React.FC = () => {
    const ProfileImg = require('../images/SquareProfile.jpg');
    return (
        
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row h-5/6 space-x-4 space-y-4 p-4 m-4 items-center border-2 bg-slate-800 border-slate-600 rounded-2xl">
            <img className="max-w-xs h-auto rounded-full border-2 border-black" src={ProfileImg} alt={"Profile Picture"} />
            <div className="max-w-prose text-slate-100">
                I moved to Austin, TX after graduating Summe Cum Lade from North Carolina State University with a B.S. in Aerospace Engineering.
                Since then I have been leverging my problem-solving, attention to detail, and desire to constantly learn as a Jr. Design Engineer
                at a growth stage maritime cyber-security startup called Fathom5. At Fathom5, I began transitioning from hardware/mechanical engineering
                to full-stack software development.
                <br /><br />
                Since then, I've been hooked! Using the abundance of resources online I have been self-teaching myself the fundamentals of software development,
                working on personal projects, and just generally loving the process of emersing myself in this exciting field.
            </div>
            </div>
        </div>
    );
}
export default About