import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';

const Sections: React.FC = () => {

    return (
        <div className="flex flex-grow flex-col h-screen w-screen bg-slate-900">
            <Header />
            <div className="snap-y snap-mandatory scroll-smooth overflow-y-auto">
                <About />
                <Experience />
                <Projects />
                <Skills />
            </div>
            <Footer />
        </div>
    )
};
export default Sections
