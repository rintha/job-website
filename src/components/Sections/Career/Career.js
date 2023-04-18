import React from "react";
import CareerCard from "./CareerCard";

const Career = () => {
  return (
    <section
      className="text-center"
      style={{
        backgroundColor: "#e7fff2",
        height: "500px",
        paddingBottom:"50px"
      }}
    >
      <div
        className=" m-5 text-center "
        style={{
      
          padding:"70px",
          
        }}
      >
          <h3 className="mb-5">CAREER DEVELOPMENT & LEARNING</h3>
          
        <div className="align-items-center">
          <CareerCard/>
        </div>
      </div>
    </section>
  );
};

export default Career;
