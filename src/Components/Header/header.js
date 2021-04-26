import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
   <div className="myNav">
    <div className="Nav">
      <ul>
        <li><NavLink exact activeClassName="nav-active" to="/btts">Home</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/btts/vehicle">Vehicle Rental</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/btts/activities">Activities</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/btts/contact">Contact</NavLink></li>
      </ul>
    </div>
  </div>
    );
}

export default Header;

