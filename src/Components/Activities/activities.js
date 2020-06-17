import React from 'react';
// import Main from '../../Images/activityMain.jpg';
import paraclide from '../../Images/Activities/parasailing1.jpg';
import scurf from '../../Images/Activities/waterSport1.jpg';
import bananaBoat from '../../Images/Activities/bananagBoat.jpg';
import boat from '../../Images/Activities/bumperBoat.jpg';
import jet from '../../Images/Activities/jetSkiing.jpg';
import Card from 'react-bootstrap/Card';
import snorkel from '../../Images/Activities/snorkel-hierro.jpg';
import dolphin from '../../Images/Activities/dolphin.jpg';
import banglow from '../../Images/Activities/Banglow.jpg';
import scuba from '../../Images/Activities/scuba.jpg';
import './activities.css';
import { Container,Row, Col} from 'react-bootstrap';

export const Activities = () => {
        return (
        <React.Fragment>
            <div className="head">Water Sports</div>
               <Container>
                    <hr/>    
                   <Row>
                       <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={paraclide} alt="paraclide" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Parasailing</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                       </Col>
                       <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={scurf} alt="scurf" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Scurf</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={bananaBoat} alt="bananaBoat" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Banana Boat</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                     <hr/>
                     <Row>
                     <Col md={2}></Col>
                       <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={boat} alt="Boat" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Bumper Boat</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                       </Col>
                       <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={jet} alt="jet" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Jet Ski Ride</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    <hr/>
                </Container> 
                <div className="head">Island Trip</div>
                <Container>
                    <hr/>    
                   <Row>
                       <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={snorkel} alt="snorkel" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Snorkelling</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                       </Col>
                       <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={dolphin} alt="dolphin" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Dolphin</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="bg-dark">
                                <Card.Img src={banglow} alt="banglow" />
                                    <Card.ImgOverlay>
                                        <Card.Title><h3>Sight Seeing</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                     <hr/>
                </Container>
                <div className="head">Scuba Diving</div>
                <Container>
                    <hr/>    
                   <Row>
                       <Col md={12}>
                            <Card className="bg-dark">
                                <Card.Img src={scuba} alt="scuba" className="scuba-img"/>
                                    <Card.ImgOverlay>
                                        <Card.Text>
                                            <div className="Scuba-Text">
                                        <h5>- TRAINING ( Swimmer & Non Swimmer )</h5>
                                        <h5>- DIVING WITH GUIDE</h5>
                                        <h5>- DIVING PHOTO & VIDEO</h5>
                                        <h5>- FOOD & BEVERAGES INCLUDED</h5>
                                        <h5>@ RS 3500 /- *** Per Person</h5>
                                            </div>
                                        </Card.Text>
                                    </Card.ImgOverlay>
                            </Card>
                       </Col>
                      </Row>
                     <hr/>
                </Container>
        </React.Fragment>
        );    
}

