import React from 'react';
import Beach from '../../Images/Beach-min.png';
import Sun from '../../Images/sunlight.png';
import Button from 'react-bootstrap/Button';
import './beach.css';
import Showcase from '../Showcase/showcase';
import { Link } from 'react-router-dom';

const BeachComp = ()=> {
    return(
    <div className="beach">
    <img src={Beach} alt="bg"/>
    <img src={Sun} alt="sun"/>
    <div className="care">
        <p>We Care We Plan</p>
        <Button variant="light"><Link to="/contact">Contact Us</Link></Button>
    </div>
    <div className="info">
        <div className="info1">
                <h3>Vehicle Rental</h3>
                <h5>Car Hire</h5>
                <p>SELF DRIVING</p>
                <p>DRIVER DRIVING</p>
                <h5>Bike Hire</h5>
        </div>
        <div className="info2">
                <h3>Activities</h3>
                <p>WATER SPORTS PACKAGES</p>
                <p>BOAT CRUISES TOURS</p>
                <p>ISLAND TOURS</p>
                <p>SCUBA DIVING</p>
        </div>
        <div className="info3">
                  <h3>Water Sports Activities</h3>
                  <p>PARASAILING</p>
                  <p>JET SKI RIDE</p>
                  <p>BANANA BOAT RIDE</p>
                  <p>BUMPER RIDE</p>
                  <p>3 TO 5 PERSON BOAT RIDE</p>
        </div>
    </div>
    <Showcase/>
    </div>
    );
}

export default BeachComp;