import React from 'react';
import FooterItem, { FooterItemProps } from './FooterItem';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {

    const footerItems: FooterItemProps[] = [
        {
            name: 'email',
            link: 'mailto:spmseanmurray@gmail.com',
            icon: faEnvelope
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/spmseanmurray/',
            icon: faLinkedin
        },
        {
            name: 'github',
            link: 'https://github.com/mgmer',
            icon: faGithub
        },
    ];

    return (
        <footer className="footer relative pt-1 border-b-2 border-p">
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-fg">
                    <div className="flex justify-evenly px-3 py-3">
                        {footerItems.map((item) =>
                            <FooterItem key={item.name} name={item.name} link={item.link} icon={item.icon} />
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;