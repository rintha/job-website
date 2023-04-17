import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CardUi from "../../Sections/Recruiters/CardUi";

const InterCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section>
      <div className="m-3 px-3">
        <p>Browse Jobs by Companies</p>
        <hr></hr>
      </div>

      <div className="m-3">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <CardUi />
          </Carousel.Item>
          <Carousel.Item>
            <CardUi />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default InterCarousel;
