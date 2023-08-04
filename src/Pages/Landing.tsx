import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

const Landing: React.FC = () => {
    return (
        <div className=" flex flex-col items-center justify-center h-screen bg-slate-900">
            <div className="text-6xl text-center font-bold text-sky-300 mx-14">
                SEAN MURRAY
            </div>
            <div className="text-2xl text-center font-bold text-slate-200 mx-5">
                Aerospace engineer turned full stack software engineer
            </div>
            <Link to="/sections">
                <button className="flex justify-center border-2 rounded-2xl border-slate-400 text-slate-200 hover:text-slate-100 p-2 mt-5 hover:bg-gray-800">
                    <div className='mr-3'>
                        Interested? Learn more!
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} size="lg" />
                    </div>
                </button>
            </Link>

        </div>
    );
}
export default Landing