import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import { Carousel } from "react-bootstrap";
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">


<div >
      <Carousel className="carousalText"   autoPlay={true} interval={1000}  >
        <Carousel.Item>
          <img style={{width: 500,height: 600}}

            className="d-block w-100 crousalimage"
            src="https://i.pinimg.com/originals/5a/65/ee/5a65ee278cd557143f05a4ba91abbfa8.gif"
            alt="First slide"
          />
          <Carousel.Caption >
            <h1 style={{color: "black" }}>Flight Booking System</h1>
            <h4 style={{color: "black" }}>Book Your Tickets Now !</h4>

          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img style={{width: 500,height: 600}}
            className="d-block w-100 crousalimage"
            src="https://vcdn-english.vnecdn.net/2020/03/20/1-1584718273-2829-1584718277_1200x0.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Sanitized Seats</h1>
            <h4>We Take Good Care Of Your Hygiene</h4>
            
      
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{width: 500,height: 600}}
            className="d-block w-100 crousalimage"
            src="https://thumbs.gfycat.com/MinorRawKentrosaurus-max-1mb.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{color: "black" }}>Flat Discounts</h1>
            <h4 style={{color: "black" }}>Travel The World With Reduced Prices</h4>
            
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img style={{width: 500,height: 600}}
            className="d-block w-100 crousalimage"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/133649493/original/463ece6308f6347c210da40edf8bcbc68419b974/sell-airline-tickets-very-cheap.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h4 style={{color: "black" }}>Flat Discounts On International Flights</h4>
      
          </Carousel.Caption>
        </Carousel.Item> 
    </Carousel>
      
    </div>
    </div>
  );
};

export default Home;
