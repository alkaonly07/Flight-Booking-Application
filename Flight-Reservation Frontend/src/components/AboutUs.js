import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
class AboutUs extends Component {
    render() {
        return (
            <div className="container">
      <Carousel className="carousalText"   autoPlay={true} interval={1500}  >
        <Carousel.Item>
          <img style={{width: 300,height: 520}}

            className="d-block w-100 crousalimage"
            src="https://cdn.expediapartnersolutions.com/eps-com/Scene-9-TAAP.png"
            alt="First slide"
          />
          <Carousel.Caption >
            <h3 style={{color: "red" }}>We are one stop for all bookings process !</h3>

          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img style={{width: 500,height: 580}}
            className="d-block w-100 crousalimage"
            src="https://triare.net/wp-content/uploads/2021/12/flight-booking-concept-illustration_114360-3012.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3 style={{color: "red" }}>Now travel the world with most affordable prices !</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{width: 500,height: 580}}
            className="d-block w-100 crousalimage"
            src="https://www.travelcarma.com/Portals/0/Images/BookingEngines/FlightBookingEngine/Flight-Booking-Engine-Clipart.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{color: "Black" }}>Payment Got Easier</h1>
            <h4 style={{color: "red" }}>Now pay with you favourite method !</h4>
            
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img style={{width: 500,height: 580}}
            className="d-block w-100 crousalimage"
            src="https://cdn.expediapartnersolutions.com/eps-com/Scene-11-GCO_v2.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h4 style={{color: "red" }}>24x7 Customer Support !</h4>
      
          </Carousel.Caption>
        </Carousel.Item> 
    </Carousel>

    </div>
        );
    }
}

export default AboutUs;