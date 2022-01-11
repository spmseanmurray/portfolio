import React from 'react';

export interface HeaderItemProps {
    name: string,
    link: string,
    featured: boolean
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, link, featured, ...props }) => {
    return (
        <div className={`text-p font-bold hover:text-p-hov ${featured ? 'border-p px-3 border-2 rounded-md hover:border-p-hov': ''}`}>
            <a href={link}>
                {name}
            </a>
        </div>
    );
}
export default HeaderItem