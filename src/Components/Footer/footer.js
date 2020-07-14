import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import './footer.css';

const Footer=()=>{
    return(
    <React.Fragment>
        <div className="footer">
        <Container>
        <Row>
            <Col md={1}></Col>
            <Col md={3}>
            <Card  bg="light" border="primary">
             <Card.Header><i className="fa fa-mobile" aria-hidden="true"></i></Card.Header>
                <Card.Body>
                     <Card.Title>CONTACT</Card.Title>
                    <Card.Text>Phone : 0983456789</Card.Text>
                    <Card.Title>MAIL</Card.Title>
                    <Card.Text>E-mail : travels@some.com</Card.Text>
                    <Card.Text>
                    <a href="https://www.facebook.com/pg/bhoomitravel"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/bhoomitourstravels7/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </Card.Text>  
                </Card.Body>
            </Card>
            </Col>
            <Col md={3}>
            <Card border="primary">
             <Card.Header>
                 <i className = "fa fa-car" aria-hidden="true"/>
                 <i className = "fa fa-motorcycle" aria-hidden="true"/>
                 <i className = "fa fa-smile-o" aria-hidden="true"/>
             </Card.Header>
                <Card.Body>
                    <Card.Title>OUR SERVICES</Card.Title>
                    <Card.Text>- Car Rentals </Card.Text>
                    <Card.Text>- Bike Rentals</Card.Text>
                    <Card.Text>- Water Activities</Card.Text>
                    <Card.Text>- Place Tourism</Card.Text>
                    <Card.Text>- Breakdown Services</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card border="primary">
             <Card.Header><i className = "fa fa-map-marker" aria-hidden="true"/></Card.Header>
                <Card.Body>
                     <Card.Title>VISIT US</Card.Title>
                    <Card.Text>
                        Bhoomi Tours & Travels,Bamon Vadde,
                        Golden tulip hotel ,Candolim,Bardez,
                        Goa 403515
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>     
      <div className="footerText"></div>
      <div className="footerText"><p>© 2020 Bhoomi Tours and Travels</p><h6>Developed by Me</h6></div>
        </div>
    </React.Fragment>);
}

export default Footer;