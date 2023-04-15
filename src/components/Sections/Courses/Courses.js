import React from "react";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://technoparkjobs.com/frontend/images/bg2.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "680px",
        overflow: "auto",
        
      }}
    >
      <div className="container">
        <div className=" row ">
        <div className="col-md-4 text-right">
            <div className="heading text-warning">
          <h1 className="text-warning">COURSE <span>XPRESS</span></h1>
          <strong className="text-dark">LEARN FROM MASTER</strong>
        </div>
        </div>
        <div className="col-md-8" mt-0>
          <div style={{ height: "200px", marginBottom: "50px" }}>
            <CourseList />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Courses;
