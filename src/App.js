import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/navbar/Navbar.js';
import Homepage from './components/homepage/Homepage.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Homepage />
    </div>
  );
}

export default App;
