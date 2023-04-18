import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import "./SectionImage.css";

const SectionImage = () => {
  return (
    <div
      className="div-hover"
      style={{
        backgroundColor: "rgba(132,255,201,0.5)",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        
      }}
    >
      <div className="mb-2">
        <Button
          as={Link}
          to="/internationaljobs"
          className="badge rounded-pill bg-success me-1 p-2"
          style={{ fontWeight: "normal" }}
        >
          International Jobs
        </Button>
        <Button
          as={Link}
          to="/fresherjobs"
          className="badge rounded-pill bg-success me-1 p-2"
          style={{ fontWeight: "normal" }}
        >
          Fresher Jobs
        </Button>
        <Button
          as={Link}
          to="/companies"
          className="badge rounded-pill bg-success me-1 p-2"
          style={{ fontWeight: "normal" }}
        >
          Companies
        </Button>
        <Button
          as={Link}
          to="/technologyparks"
          className="badge rounded-pill bg-success me-1 p-2"
          style={{ fontWeight: "normal" }}
        >
          Technology Parks
        </Button>
        <h2 className="mt-2">Experience the new way to work</h2>
        <p>see jobs we've picked for you</p>
      </div>
      <Col
        xs={{ span: 12 }}
        md={{ span: 4, offset: 8 }}
        style={{ position: "absolute", bottom: "2em", }}
      >
        {" "}
        <Row className="justify-content-md-end justify-content-center ">
          <span className="text-center">New User?</span>
          <Button className="text-white mb-2" variant="warning">
            Upload Resume
          </Button>
        </Row>
        <Row className="justify-content-md-end justify-content-center">
          <Button variant="success">Create Job Alerts</Button>
        </Row>
      </Col>
    </div>
  );
};

export default SectionImage;
