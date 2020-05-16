import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import vehicleData from '../../data.json';
import Sun from '../../Images/Cars/Ertiga.jpg';
import './vehicleRental.css';

export default class Vehicle extends React.Component{  

    render(){
        return(
        <React.Fragment>
            <div className="head">Car Hire</div>
            <div className="preHead">
                <p>Self Driving</p>
                <p>Travel all enlightening places of Goa on your own terms.</p>
            </div>
            <Container>
                <Row>
                <Col md={1}></Col>
            <CardDeck>
            {
            vehicleData.data.carSelf.map((i,el)=>
            <Col md={4} key={el}>
                <Card>
                 <Card.Img variant="top" src={Sun} alt={i.name}/>
                <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
            <small className="text-muted">From {i.price}</small>
                </Card.Footer>
            </Card>
            </Col>
            )}
            </CardDeck>
            <Col md={1}></Col> 
            </Row>
            </Container>
            <div className="preHead">
                <p>Driver Driving</p>
                <p>Be Relax and Let the driver drive</p>
            </div>
            <Container>
                <Row>
                <Col md={1}></Col>
            <CardDeck>
            {
            vehicleData.data.carDriver.map((i,el)=>
            <Col md={4} key={el}>
                <Card>
                 <Card.Img variant="top" src={Sun} alt={i.name}/>
                <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">From {i.price}</small>
                </Card.Footer>
            </Card>
            </Col>
            )}
            </CardDeck>
            <Col md={1}></Col> 
            </Row>
            </Container>
            <div className="head">Bike Hire</div>
            <div className="preHead">
                <p>2 person 2 Wheels fantastic combo !</p>
            </div>
            <Container>
                <Row>
                <Col md={1}></Col>
            <CardDeck>
            {
            vehicleData.data.bike.map((i,el)=>
            <Col md={4} key={el}>
                <Card>
                 <Card.Img variant="top" src={Sun} alt={i.name}/>
                <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">From {i.price}</small>
                </Card.Footer>
            </Card>
            </Col>
            )}
            </CardDeck>
            <Col md={1}></Col> 
            </Row>
            </Container>
            <div className="preHead">***</div>
        </React.Fragment>
        );
    }
}