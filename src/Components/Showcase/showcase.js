import React from 'react';
import Car from '../../Images/Cars/Swift.jpg';
import Snor from '../../Images/Activities/snorkel-hierro.jpg';
import Bike from '../../Images/Bikes/Bullet_350.jpg';
import Scuba from '../../Images/Activities/scuba.jpg';
import './showcase.css';

const Showcase=()=>{
        return(
            <React.Fragment>
                <div className="parent">
                <div className="one">
                    <img style={{height:"inherit", width:" 70%"}} src={Car} alt="thar"/>
                    <span className="carHire">Car Hire</span>
                </div>
                <div className="two">
                <img style={{height:"inherit", width:" 70%"}} src={Bike} alt="thar"/>
                    <span className="bikeHire">Bike Hire</span>
                </div>
                <div className="three">
                <img style={{height:"inherit", width:" 70%"}} src={Scuba} alt="thar"/>
                    <span className="scuba">Scuba</span>
                </div>
                <div className="four">
                    
                <img style={{height:"inherit", width:" 70%"}} src={Snor} alt="thar"/>
                    <span className="snor">Snorkeling</span>
                </div>
                </div>
                <div style={{width:"100%",height:"100px"}}>
                    d
                </div>
            </React.Fragment>
       );
}

export default Showcase;