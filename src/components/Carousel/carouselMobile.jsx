import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";


const CarouselMobileComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSwapRef = useRef(null);

  const items = [
    { id: 1, img: "src/assets/images/restaurant.png" },
    { id: 2, img: "src/assets/images/restaurant2.png" },
    { id: 3, img: "src/assets/images/restaurant3.png" },
    { id: 4, img: "src/assets/images/restaurant4.png" },
  ];

  useEffect(() => {
    startAutoSwap();
    return () => clearInterval(autoSwapRef.current);
  }, [activeIndex]);

  const startAutoSwap = () => {
    clearInterval(autoSwapRef.current);
    autoSwapRef.current = setInterval(() => {
      swap();
    }, 3500);
  };

  const swap = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} className="carousel-container d-flex d-lg-none m-md-0 w-100 h-25"> 
      {items.map((item, index) => (
        <Carousel.Item key={item.id}> 
          <img className="d-block w-100" src={item.img} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselMobileComponent;