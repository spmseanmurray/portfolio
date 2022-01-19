import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';

const App: React.FC = () => {
  return (
    <div className="h-full bg-gray-900">
      <Landing />
      <div className="flex flex-col">
        <Header />
        <About />
        <Projects />
        <Skills />        
        <Footer />
      </div>
    </div>
  );
}

export default App;
