import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Showcase from './Components/Showcase/showcase';
import BeachComp from './Components/Beach/beach';
import Footer from './Components/Footer/footer';
import Vehicle from './Components/Vehicle/vehicleRental';


function App() {
  return (
    <div>
      <div className="headerText">Bhoomi Tours and Travels</div>
      <Header/>
      {/* <BeachComp/>  */}
      {/* <Showcase/> */}
      {/* <Vehicle/> */}
      <Footer/>
      <div className="footerText"></div>
      <div className="footerText"><p>© 2020 Bhoomi Tours and Travels</p><h6>Developed by Me</h6></div>
    </div>
  );
}

export default App;
