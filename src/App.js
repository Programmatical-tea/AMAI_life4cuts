import React from 'react';

import './App.css';
import './css/home.css';
import './css/start.css';
import './css/photo.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Start from './components/start';
import Photo from './components/photo';

function App() {
  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/photo" element={<Photo />} />
    </Routes>

    </Router>
  );
}

export default App;
