import React from 'react';

interface HeaderItemProps {
    name: string,
    link: string,
}

const Header: React.FC = () => {

    const headerItems: HeaderItemProps[] = [
        {
            name: 'About',
            link: '',
        },
        {
            name: 'Experience',
            link: '',
        },
        {
            name: 'Projects',
            link: '',
        },
        {
            name: 'Skills',
            link: '',
        },
        {
            name: 'Contact',
            link: '',
        },
    ]

    return (
        <header className="header relative">
            <div className="container mx-auto flex flex-row justify place-content-between py-3 border-b-2 border-slate-500">
                <div className='flex justify-start text-2xl font-bold text-sky-300 mx-10'>
                    Sean Murray
                </div>
                <div className="flex flex-col md:flex-row items-center ">
                    {headerItems.map(item =>
                        <div className="text-slate-100 px-3 hover:text-slate-400">
                            <div className={`text-slate-100 font-bold hover:text-slate-400 `}>
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;