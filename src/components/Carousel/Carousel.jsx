import React, { useState, useEffect, useRef } from "react";


const CarouselComponent = () => {
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
    <div className="d-none d-lg-block carousel-container">
      <ul className="carousel">
        {items.map((item, index) => {
          let className = "items";
          if (index === activeIndex) className += " main-pos";
          else if (index === (activeIndex + 1) % items.length) className += " right-pos";
          else if (index === (activeIndex - 1 + items.length) % items.length) className += " left-pos";
          else className += " back-pos";

          return (
            <li key={item.id} className={className}>
              <img className="image-carousel" src={item.img} alt={`Slide ${index + 1}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarouselComponent;