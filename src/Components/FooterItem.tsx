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
        <div className="text-sm text-p font-bold mb-2 hover:text-p-hov">
            <a href={link} target="_blank">
                <FontAwesomeIcon icon={icon} size="3x"/>
            </a>
        </div>
    );
}
export default FooterItem