import React from "react";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import InterCarousel from "../International Jobs/InterCarousel";
import CompanyImg from "./CompanyImg";
import CompanyMain from "./CompanyMain";

const Companies = () => {
  return (
    <>
      <Header />
      <div style={{ background: "#f0f5f4" }}>
        <CompanyImg />
        <CompanyMain />
        <InterCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Companies;
