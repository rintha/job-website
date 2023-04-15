import React from "react";
import CareerCard from "./CareerCard";

const Career = () => {
  return (
    <section
      className="text-center"
      style={{
        backgroundColor: "#e7fff2",
        height: "500px",
      }}
    >
      <div
        className="m-5 text-center container"
        style={{
          paddingTop: "50px",
        }}
      >
        <div>
          <h2>CAREER DEVELOPMENT & LEARNING</h2>
          <hr />
        </div>
        <div className="d-flex justify-content-center">
          <div className="m-3">
            <CareerCard />
          </div>
          <div className="m-3">
            <CareerCard />
          </div>
          <div className="m-3">
            <CareerCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
