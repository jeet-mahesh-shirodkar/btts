import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import BeachComp from './Components/Beach/beach';
import Footer from './Components/Footer/footer';
import Vehicle from './Components/Vehicle/vehicleRental';
import {Activities} from './Components/Activities/activities';
import { BrowserRouter, Switch, Route, Redirect,Link } from 'react-router-dom';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <div className="headerText"><Link to="/btts">Bhoomi Tours and Travels</Link></div>
      <Header/>
      <Switch>
        <Route path="/btts" exact component={BeachComp}/>
        <Route path="/btts/vehicle" component={Vehicle}/>
        <Route path="/btts/activities" component={Activities}/>
        <Route path="/btts/contact" component={Contact}/>
        <Redirect to="/btts"/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
