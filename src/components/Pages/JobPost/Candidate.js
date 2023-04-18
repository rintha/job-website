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
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/baluthomas.jpg"
                name="BALU THOMAS "
                title="Director"
              />
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/manusunny.jpg"
                name="MANU SUNNY"
                title="Client Relation  Manager"
              />
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/rajeev.jpg"
                name="RAJEEV SJ"
                title="Software Tester"
              />
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/rinuraj.jpg"
                name="RINU RAJ"
                title="ACCOUNTS MANAGER"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card-container">
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/sabarish.jpg"
                name="SABARISH SASI"
                title="PHP DEVELOPER"
              />
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/salman.jpg"
                name="SALMAN FARIS"
                title="Web Designer"
              />
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/sheethalk.jpg"
                name="SHEETHAL KURIAN"
                title="Hr Director"
              />
              <CandidateCard
                src="https://employer.technoparkjobs.com/employer/employer-page/rajeev.jpg"
                name="RAJEEV SJ"
                title="Software Tester"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Candidate;
