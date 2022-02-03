import React from 'react'
import ExperienceInterface from '../types/ExperienceInterface';

const ExperienceItem: React.FC<ExperienceInterface> = ({ company, dates, position, bullets }) => {
    return (
        < div className={'border-slate-600 border-2 rounded-2xl bg-slate-800 my-3 mx-5 md:w-4/5 2xl:w-2/3 3xl:w-1/2 md:h-auto'} >
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-center p-3 md:gap-x-8 border-b-2 border-slate-600">
                    <div className="flex-row items-center justify-between md:justify-center">
                        <div className='flex flex-row items-center gap-x-2 '>
                            <img className="w-10 md:w-16 rounded-xl" src={require("../images/employers/" + company.toLowerCase() + ".png")} alt={company + "image"} />
                            <div className='text-xl text-slate-200 font-bold'> {company}</div>
                        </div>
                        <div className='text-md text-slate-300 md:hidden'>{dates}</div>
                    </div>
                    <div className='text-xl text-sky-300 font-bold'> {position}</div>
                    <div className='text-md text-slate-300 hidden md:flex'>{dates}</div>
                </div>
                <div className='text-m text-slate-300 mx-4 my-2'>
                    {bullets.map((bullet,ind) => {
                        return <div key={ind}>- {bullet}</div>
                    })}
                </div>
            </div>
        </div>
    );
}
export default ExperienceItem