import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Pages/Landing';
import Sections from './Pages/Sections'


const App: React.VFC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sections" element={<Sections />} />
      </Routes>
    </Router>
  );
}

export default App;
