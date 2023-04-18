import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CardUi from "./CardUi";
import "./Recruiters.css"

const Recruiters = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section>
      <div className="m-3 px-3 recruiter">
        <h3 style={{fontWeight:"lighter"}}>
          TOP<span style={{fontWeight:"bold"}}> RECRUITERS</span>{" "}
        </h3>
        <div className="section_title_line_medium"></div>
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

export default Recruiters;
