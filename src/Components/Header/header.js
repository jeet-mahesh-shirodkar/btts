import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
   <div className="myNav">
    <div className="Nav col-md-12">
      <ul>
        <li><NavLink exact activeClassName="nav-active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/vehicle">Vehicle Rental</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/activities">Activities</NavLink></li>
        <li><NavLink activeClassName="nav-active" to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </div>
    );
}

export default Header;

