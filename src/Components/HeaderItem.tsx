import React from 'react';

export interface HeaderItemProps {
    name: string,
    link: string,
    featured: boolean
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, link, featured, ...props }) => {
    return (
        <div className={`text-slate-100 font-bold hover:text-slate-400 ${featured ? '': ''}`}>
            <a href={link}>
                {name}
            </a>
        </div>
    );
}
export default HeaderItem