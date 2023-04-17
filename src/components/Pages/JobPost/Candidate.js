import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CandidateCard from "./CandidateCard";

const Candidate = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        {" "}
        <h1 className="text-success ">Top Candidates</h1>
      </div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="card-container">
              <CandidateCard />
              <CandidateCard />
              <CandidateCard />
              <CandidateCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card-container">
              <CandidateCard />
              <CandidateCard />
              <CandidateCard />
              <CandidateCard />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Candidate;
