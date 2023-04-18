import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CardUi from "../../Sections/Recruiters/CardUi";
import "./International.css"

const InterCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="carosel" style={{background:"white",padding:"2em"}}>
        <p style={{marginT:"2em"}}>Browse Jobs by Companies</p>
        <div className="section_title_line_medium"></div>

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
