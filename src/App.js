import React from 'react';
import './App.css';
import Navbar from "./Navbar.js";
import Moneytracker from "./moneytracker/Moneytracker.js"



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
          <Moneytracker />
      </div>
    </div>
  );
}

export default App;
