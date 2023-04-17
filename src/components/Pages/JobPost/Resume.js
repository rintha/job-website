import React from "react";
import { Button } from "react-bootstrap";
import res from "../../../assets/res.jpg";

const Resume = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "400px",
          background: `url(${res}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div classNmae="ms-2">
          <h3 style={{ textAlign: "center" }}>365 Days Free Job Post</h3>
          <p style={{ textAlign: "center" }}>
            Start 365 Days FREE Recruiter Account trial Today with unlimited Job
            Post!
          </p>
          <div className="text-center"><Button variant="success">Click Here</Button></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
