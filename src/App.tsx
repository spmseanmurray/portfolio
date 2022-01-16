import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';

const App: React.FC = () => {
  return (
    <div className="h-full bg-gray-900">
      <Landing />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='my-auto'>
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
