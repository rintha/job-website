import React from "react";
import CourseCard from "./CourseCard";
import Carousel from "react-bootstrap/Carousel";

const CourseList = () => {
  return (
    <div className="p-4 bg-light">
      <div>
        <p className="h3">Courses & Certifications</p>
        <p>
          Learn new Trending Skills, Choose E-learning certification t0
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
