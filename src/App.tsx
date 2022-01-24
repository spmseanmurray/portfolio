import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';

const App: React.FC = () => {
  return (
    <div className=" bg-gray-900">
      <Landing />
      <div className="flex flex-col relative">
        <div className="fixed top-0 left-0 right-0">
          <Header />
        </div>
        <div className="space-y-80 mb-80"> 
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
        <div className="fixed bottom-0 left-0 right-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
