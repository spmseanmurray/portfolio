import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

const Landing: React.FC = () => {
    return (
        <div className=" flex flex-col items-center justify-center mx-14 h-screen">
            <div className="text-6xl font-bold text-sky-300">
                SEAN MURRAY
            </div>
            <div className="text-2xl font-bold text-slate-200">
                Aerospace engineer turned self-taught full stack software developer
            </div>
            <div className="flex justify-center border-2 rounded-2xl border-slate-400 text-slate-200 hover:text-slate-100 p-2 mt-5 hover:bg-gray-800">
                <div className='mr-3'>
                    Interested? Learn more!
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowAltCircleDown} size="lg" />
                </div>
            </div>

        </div>
    );
}
export default Landing