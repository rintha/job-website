import React from "react";
import JobHeader from "./JobHeader";
import jbg from "../../../assets/jobapost.jpg";
import { Button } from "react-bootstrap";
import Services from "./Services";
import Resume from "./Resume";
import Candidate from "./Candidate";
import TopRecruiters from "./TopRecruiters";
import emp from "../../../assets/emp.jpeg";
import Footer from "../../Layouts/Footer";

const JobPost = () => {
  return (
    <section>
      <JobHeader />
      <div
        style={{
          width: "300vh",
          height: "400px",
          position: "relative",
        }}
      >
        <div
          style={{
            background: `url(${jbg}) no-repeat center center/cover`,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          className="text-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "30px",
            borderRadius: "0px",
            zIndex: 1,
          }}
        >
          <h3>Register an employer account</h3>
          <p>Post Jobs & Get Relevant Resumes</p>
          <Button variant="success">Get Started Now</Button>
        </div>
      </div>
      <Services />
      <Resume />
      <Candidate />
      <TopRecruiters />
      <img src={emp} alt="" style={{ width: "100%" }} />
      <Footer/>
    </section>
  );
};

export default JobPost;
