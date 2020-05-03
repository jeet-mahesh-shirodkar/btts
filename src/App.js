import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import { BeachComp } from './Components/Beach/beach';


function App() {
  return (
    <div>
      <div className="heading">Bhoomi Tours and Travels</div>
      <Header/>
      <BeachComp/>
    </div>
  );
}

export default App;
