import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import BeachComp from './Components/Beach/beach';
import Footer from './Components/Footer/footer';
import Vehicle from './Components/Vehicle/vehicleRental';
import {Activities} from './Components/Activities/activities';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <React.Fragment>
      <div className="headerText">Bhoomi Tours and Travels</div>
      <Header/>
      <Switch>
        <Route path="/" exact component={BeachComp}/>
        <Route path="/vehicle" component={Vehicle}/>
        <Route path="/activities" component={Activities}/>
        <Route path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
