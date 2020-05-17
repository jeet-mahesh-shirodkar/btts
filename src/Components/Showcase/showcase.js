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
                    <img style={{height:"inherit", width:" 70%"}} src={Car} alt="Swift"/>
                    <div className="middle">
                    <div className="carHire">
                        <span className="headingCar">Car Hire</span>
                        <hr/>
                        Provide you the best available in market
                        <hr/>
                    </div>
                    </div>
                </div>
                <div className="two">
                <img style={{height:"inherit", width:" 70%"}} src={Bike} alt="bullet"/>
                    <div className="middleTwo">
                    <div className="bikeHire">
                        <span className="headingBike">Bike Hire</span>
                        <hr/>
                            Be one step ahead to traffic
                        <hr/>
                    </div>
                    </div>
                </div>
                <div className="three">
                <img style={{height:"inherit", width:" 70%"}} src={Scuba} alt="scuba"/>
                    <div className="middleThree">
                        <div className="scuba">
                            <span className="headingScuba">Scuba</span>
                            <hr/>
                            Explore underwater noise
                            <hr/>
                    </div>
                    </div>
                </div>
                <div className="four">    
                <img style={{height:"inherit", width:" 70%"}} src={Snor} alt="Snor"/>
                    <div className="middleFour">
                        <div className="snorkeling">
                            <span className="headingSnor">Snorkeling</span>
                            <hr/>
                                Hey Fishes, How r you ?
                            <hr/>
                    </div>
                    </div>
                </div>
                </div>
                <div style={{width:"100%",height:"100px"}}>
                    d
                </div>
            </React.Fragment>
       );
}

export default Showcase;