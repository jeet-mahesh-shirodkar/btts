import React from 'react';
import {Carousel, Container, Row, Col, Card} from 'react-bootstrap';

import Sun from '../../../Images/sunlight.png';


const CarouselComp =({data})=>{
    return(
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
        <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Sun} alt="First slide"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://static.dezeen.com/uploads/2019/03/bugatti-la-voiture-noire-car-design_dezeen_2364_hero-1-1704x959.jpg" alt="second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Sun} alt="thired slide"/>
        </Carousel.Item>
      </Carousel>
      </Col>
      <Col md={1}></Col>
      </Row>
      <Container>
        <Row>
         <Col md={1}></Col>
            <Col md={10}>
            <Card className="bg-dark text-white">
                <Card.Img src="https://cdn1.tripoto.com/media/filter/tst/img/559032/Image/1587419368_5_1.jpg" alt="Card image" />
            <Card.ImgOverlay>
             <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
    </Card>
            </Col>
            <Col md={1}></Col>
    </Row>
    </Container>
      </Container>
          );
}

export default CarouselComp;