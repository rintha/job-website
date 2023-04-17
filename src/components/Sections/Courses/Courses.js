import React from "react";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://technoparkjobs.com/frontend/images/bg2.jpg')`,
        backgroundSize: "fit",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "auto",
      }}
    >
      <div className="container">
        <div className=" row ">
          <div className="col-md-4 text-right">
            <div className="heading text-warning">
              <h1 className="text-warning">
                COURSE <span>XPRESS</span>
              </h1>
              <strong className="text-dark">LEARN FROM MASTER</strong>
            </div>
          </div>
          <div className="col-md-8">
            <CourseList />
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Courses;
