import React from 'react';
import Beach from '../../Images/Beach-min.png';
import Sun from '../../Images/sunlight.png';
import Button from 'react-bootstrap/Button'
import './beach.css';

export const BeachComp = ()=>{
    return(
    <div className="beach">
    <img src={Beach} alt="bg"></img>
    <img src={Sun} alt="sun"></img>
    <div className="care">
        <p>We Care We Plan</p>
        <Button variant="light">Contact US</Button>
    </div>
    </div>
    );
}
