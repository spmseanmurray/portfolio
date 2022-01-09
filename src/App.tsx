import React from 'react';
import './App.css';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className="h-full bg-slate-800">
      <div className="flex flex-col min-h-screen">
        <p className="flex-grow text-center text-4xl text-white"> Sean Murray - Full Stack Developer</p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
