import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../image/download4.jpeg';
import image2 from '../image/download2.jpg';
import image3 from '../image/download3.jpeg';
import HomePageBottomDetails from './HomePageBottomDetails';

export default function TopSlideBar() {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img src={image1}/>
        <Carousel.Caption>
          <h3>Tata Honda</h3>
          <p><b>₹ 5000000 Only</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={image2}
        />
        <Carousel.Caption>
        <h3>Audi Car</h3>
          <p><b>₹ 2000000 Only</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} 
        />
        <Carousel.Caption>
        <h3>Bugatti</h3>
          <p><b>₹ 1000000 Only</b></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <HomePageBottomDetails/>
    </div>
  )
}
