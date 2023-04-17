import React from "react";
import Footer from "../../Layouts/Footer";
import FresherImg from "./FresherImg";
import InterCarousel from "../International Jobs/InterCarousel";
import FresherMain from "./FresherMain";
import Header from "../../Layouts/Header";

const FresherJobs = () => {
  return (
    <>
      <Header/>
      <FresherImg />
      <FresherMain />
      <InterCarousel />
      <Footer />
    </>
  );
};

export default FresherJobs;
