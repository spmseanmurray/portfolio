import React from 'react';
import FooterItem, { FooterItemProps } from './FooterItem';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


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
        <div id="contact" className="bg-neutral-900 opacity-90 w-full">
            <div className="border-t-2 border-slate-500 mx-6">
                <div className="flex justify-evenly px-3 pt-3">
                    {footerItems.map((item) =>
                        <FooterItem key={item.name} name={item.name} link={item.link} icon={item.icon} />
                    )}
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='text-slate-200 mr-3'>
                    Sean Murray
                </div>
                <div className='text-sky-300 text-sm my-auto'>&copy; 2022</div>
            </div>
        </div>
    );
}

export default Footer;