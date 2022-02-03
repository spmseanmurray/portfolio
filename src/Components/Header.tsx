import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import headerItems from '../config/HeaderConfig';

const Header: React.FC = () => {
    return (
        <div className="bg-neutral-900 opacity-90 px-6">
            <div className="flex flex-row place-content-center sm:place-content-between py-1 border-b-2 border-slate-600">
                <Link to="/">
                    <div className='flex text-2xl font-bold text-white mx-10'>
                        Sean Murray
                    </div>
                </Link>
                <div className="hidden sm:flex md:flex-row items-center ">
                    {headerItems.map(item =>
                        <div className="text-slate-100 px-3 hover:text-slate-400">
                            <div className={`text-slate-100 font-bold hover:text-slate-400 `}>
                                <HashLink smooth to={item.link}>
                                    {item.name}
                                </HashLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;