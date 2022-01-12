import React from 'react';
import HeaderItem from './HeaderItem';
import { HeaderItemProps } from './HeaderItem';

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
            name: 'Contacts',
            link: '',
            featured: false
        },
        {
            name: 'Resume',
            link: '',
            featured: true
        },
    ]

    return (
        <header className="header relative border-t-2 border-p">
            <div className="container mx-auto flex flex-row justify place-content-between py-3 border-b-2 border-fg">
                <div className='flex justify-start text-2xl font-bold text-white mx-10'>
                    Sean Murray
                </div>
                <div className=" flex items-center ">
                    {headerItems.map(item =>
                        <div className="text-p px-3 hover:text-p-hov">
                            <HeaderItem name={item.name} link={item.link} featured={item.featured}/>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;