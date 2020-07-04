import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Showcase from './Components/Showcase/showcase';
import BeachComp from './Components/Beach/beach';
import Footer from './Components/Footer/footer';
import Vehicle from './Components/Vehicle/vehicleRental';
import {Activities} from './Components/Activities/activities';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <div className="headerText">Bhoomi Tours and Travels</div>
      <Header/>
      <Switch>
        <Route path="/" exact component={BeachComp}/>
        <Route path="/vehicle" component={Vehicle}/>
        <Route path="/activities" component={Activities}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
      <div className="footerText"></div>
      <div className="footerText"><p>© 2020 Bhoomi Tours and Travels</p><h6>Developed by Me</h6></div>
    </React.Fragment>
  );
}

export default App;
