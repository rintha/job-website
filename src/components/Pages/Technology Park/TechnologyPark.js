import React from "react";
import Footer from "../../Layouts/Footer";
import JobHeader from "../JobPost/JobHeader";
import TechnologyMain from "./TechnologyMain";
import TechImg from "./TechImg";

const TeachnologyPark = () => {
  return (
    <>
      <JobHeader />
      <div style={{background:"#f0f5f4", }}>
      <TechImg />
      <TechnologyMain />
      </div>
      <Footer />
    </>
  );
};

export default TeachnologyPark;
