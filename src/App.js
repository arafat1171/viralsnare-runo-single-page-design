import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Carousel from './Carousel.js'
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/Carousel" element={<Carousel />} />   
  

          
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
