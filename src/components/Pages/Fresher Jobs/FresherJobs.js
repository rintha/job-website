import React from "react";
import Footer from "../../Layouts/Footer";
import FresherImg from "./FresherImg";
import FresherMain from "./FresherMain";
import Header from "../../Layouts/Header";
import "./fresher.css";

const FresherJobs = () => {
  return (
    <>
      <Header />
      <div style={{ background: "#f0f5f4" }}>
        <FresherImg />
        <FresherMain />
      </div>
      <Footer />
    </>
  );
};

export default FresherJobs;
