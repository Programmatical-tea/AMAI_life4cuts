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

let imageSet = []
let selectedFew = ["X","X","X","X","X","X","X","X"]

function App() {
  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/photo" element={<Photo imageSrc={imageSet} />} />
      <Route path="/check" element={<Check imageSrc={imageSet} selected={selectedFew} />} />
      <Route path="/process" element={<Process imageSrc={imageSet}/>} />
    </Routes>

    </Router>
  );
}

export default App;
