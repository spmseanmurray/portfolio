import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Skills from "../Components/Skills";

const Sections: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col h-screen w-screen bg-slate-900">
      <Header />
      <div className="md:snap-y md:snap-mandatory scroll-smooth overflow-y-auto">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};
export default Sections;
