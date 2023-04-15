import React from "react";
import CourseCard from "./CourseCard";
import Carousel from "react-bootstrap/Carousel";

const CourseList = () => {
  return (
    <div className="bg-light d-flex flex-column justify-content-center align-items-center">
      <div>
        <p>Courses & Certifications</p>
        <p>
          Learn new Trending Skills, Choose E-learning certification to{" "}
          <b>fast track your way up the career ladder.</b>
        </p>
      </div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <div className="d-flex flex-wrap justify-content-center">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="d-flex flex-wrap justify-content-center">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CourseList;
