import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

interface HeaderItemProps {
    name: string,
    link: string,
}

const Header: React.FC = () => {

    const headerItems: HeaderItemProps[] = [
        {
            name: 'About',
            link: '/sections/#about',
        },
        {
            name: 'Experience',
            link: '/sections/#experience',
        },
        {
            name: 'Projects',
            link: '/sections/#projects',
        },
        {
            name: 'Skills',
            link: '/sections/#skills',
        },
    ]

    return (
        <div className="bg-neutral-900 opacity-90 px-6">
            <div className="flex flex-row justify place-content-between py-1 border-b-2 border-slate-600">
                <Link to="/">
                    <div className='flex justify-start text-2xl font-bold text-white mx-10'>
                        Sean Murray
                    </div>
                </Link>
                <div className="flex flex-col md:flex-row items-center ">
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