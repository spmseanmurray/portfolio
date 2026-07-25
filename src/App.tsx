import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-ground">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
