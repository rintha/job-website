import React from "react";
import Header from "../Layouts/Header";
import Search from "../Sections/SearchBar-Section/Search";
import Recruiters from "../Sections/Recruiters/Recruiters";
import Courses from "../Sections/Courses/Courses";
import Blogs from "../Sections/Blogs/Blogs";
import TechnoMore from "../Sections/technopark/TechnoMore";
import Career from "../Sections/Career/Career";
import Map from "../Sections/Map/Map";
import Main from "../Sections/Main-Content/Main";
import Footer from "../Layouts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Recruiters />
      <Main />
  
        <Courses />
        <Map />
        <Career />
        <TechnoMore />
        <Blogs />
  
      <Footer />
    </>
  );
};

export default Home;
