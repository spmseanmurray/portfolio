import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export interface FooterItemProps {
    name: string,
    link: string,
    icon: IconDefinition
}

const FooterItem: React.FC<FooterItemProps> = ({ name, link, icon, ...props }) => {
    return (
        <div className="text-sm text-slate-100 font-bold hover:text-slate-400">
            <a href={link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} size="2x"/>
            </a>
        </div>
    );
}
export default FooterItem