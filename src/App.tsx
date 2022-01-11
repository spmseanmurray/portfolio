import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'

const App: React.FC = () => {
  return (
    <div className="h-full bg-bg">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow"/> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
