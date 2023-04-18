import React from "react";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import HeaderImgIn from "./HeaderImgIn";
import InterMain from "./InterMain";
import InterCarousel from "./InterCarousel";

const International = () => {
  return (
    <>
      <Header />
      <div style={{background:"#f0f5f4", }}>
      <HeaderImgIn />
      <InterMain />
      <InterCarousel />
      </div>
      <Footer />
    </>
  );
};

export default International;
