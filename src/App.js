import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Showcase from './Components/Showcase/showcase';
import BeachComp from './Components/Beach/beach';
// import Vehicle from './Components/Vehicle/vehicleRental';


function App() {
  return (
    <div>
      <div className="heading">Bhoomi Tours and Travels</div>
      <Header/>
      <BeachComp/> 
      <Showcase/>
      {/* <Vehicle/> */}
      <div className="footerText"><p>© 2020 Bhoomi Tours and Travels</p><h6>Developed by Me</h6></div>
    </div>
  );
}

export default App;
