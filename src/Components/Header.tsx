import React from 'react';
import HeaderItem from './HeaderItem';
import { HeaderItemProps } from './HeaderItem';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header: React.FC = () => {

    const headerItems: HeaderItemProps[] = [
        {
            name: 'About',
            link: '',
            featured: false
        },
        {
            name: 'Experience',
            link: '',
            featured: false
        },
        {
            name: 'Projects',
            link: '',
            featured: false
        },
        {
            name: 'Skills',
            link: '',
            featured: false
        },
        {
            name: 'Contact',
            link: '',
            featured: false
        },
        // {
        //     name: 'Resume',
        //     link: '',
        //     featured: true
        // },
    ]

    return (
        <header className="header relative">
            <div className="container mx-auto flex flex-row justify place-content-between py-3 border-b-2 border-slate-500">
                <div className='flex justify-start text-2xl font-bold text-sky-300 mx-10'>
                    Sean Murray
                </div>
                <div className=" flex items-center ">
                    {headerItems.map(item =>
                        <div className="text-slate-100 px-3 hover:text-slate-400">
                            <HeaderItem name={item.name} link={item.link} featured={item.featured}/>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;