import React from 'react';
// import Main from '../../Images/activityMain.jpg';
import paraclide from '../../Images/Activities/parasailing1.jpg';
import scurf from '../../Images/Activities/waterSport1.jpg';
import bananaBoat from '../../Images/Activities/bananagBoat.jpg';
import boat from '../../Images/Activities/bumperBoat.jpg';
import jet from '../../Images/Activities/jetSkiing.jpg';
import Card from 'react-bootstrap/Card';
import './activities.css';
import { Container,Row, Col} from 'react-bootstrap';

export const Activities = () => {
        return (
        <React.Fragment>
            <div className="head">Water Sports</div>
                {/* <div className="preHead">
                    <p>family re-connecting the pixels</p>
                </div> */}
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
                                        <Card.Title><h3>Scurf</h3></Card.Title>
                                    </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    <hr/>
                </Container>   
            {/* <div className="activitiesMain">
                <img src={Main} alt="activityMain"/>
            </div> */}
        </React.Fragment>
        );    
}

