import React from 'react';
import Beach from '../../Images/Beach-min.png';
import Sun from '../../Images/sunlight.png';
import Button from 'react-bootstrap/Button'
import './beach.css';

export const BeachComp = ()=>{
    return(
    <div className="beach">
    <img src={Beach} alt="bg"/>
    <img src={Sun} alt="sun"/>
    <div className="care">
        <p>We Care We Plan</p>
        <Button variant="light">Contact US</Button>
    </div>
    <div className="info">
        <div className="info1">
                <h3>Vehicle Rental</h3>
                <h5>Car Hire</h5>
                <p>SELF DRIVING</p>
                <p>DRIVER DRIVING</p>
                <h5>Bike Hire</h5>   
        </div>
        <div className="info2"></div>
        <div className="info3"></div>
    </div>
    </div>
    );
}
