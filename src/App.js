import React from 'react';

import './App.css';
import './css/home.css';
import './css/start.css';
import './css/photo.css';
import './css/check.css';
import './css/process.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Start from './components/start';
import Photo from './components/photo';
import Check from './components/check';
import Process from './components/process';


function App() {
  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/check" element={<Check />} />
      <Route path="/process" element={<Process />} />
    </Routes>

    </Router>
  );
}

export default App;
