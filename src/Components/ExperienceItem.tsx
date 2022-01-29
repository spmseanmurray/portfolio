import React from 'react'

export interface ExperienceItemProps {
    company: string,
    startDate: string,
    endDate: string,
    position: string,
    bullets: string[],
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, startDate, endDate, position, bullets }) => {
    return (
        < div className={'w-full border-slate-600 border-2 rounded-2xl bg-slate-800 my-3 mx-5'} >
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-center p-3 gap-x-8 border-b-2 border-slate-600">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <img className="w-10 md:w-16 rounded-xl" src={require("../images/employers/" + company.toLowerCase() + ".png")} alt={company + "image"} />
                        <div className='text-xl text-slate-200 font-bold'> {company}</div>
                    </div>
                    <div className='text-xl text-sky-300 font-bold'> {position}</div>
                    <div className='text-md text-slate-300'>{startDate} - {endDate}</div>
                </div>
                <div className='text-lg text-slate-300 mx-4 my-2'>
                    {bullets.map(bullet => {
                        return <div>- {bullet}</div>
                    })}
                </div>
            </div>
        </div>
    );
}
export default ExperienceItem