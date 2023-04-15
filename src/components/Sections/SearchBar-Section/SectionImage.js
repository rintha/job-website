import React from "react";
import { Button, Badge, Col, Row } from "react-bootstrap";
import './SectionImage.css';

const SectionImage = () => {
  return (
    <div className="div-hover" 
      style={{
        backgroundColor: "rgba(132,255,201,0.5)",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="mb-2">
        <Badge className="me-1" bg="success">
          International Jobs
        </Badge>
        <Badge className="me-1" bg="success">
          Fresher Jobs
        </Badge>
        <Badge className="me-1" bg="success">
          Companies
        </Badge>
        <Badge className="me-1" bg="success">
          Technology Parks
        </Badge>
        <h2 className="mt-2">Experience the new way to work</h2>
        <p>see jobs we've picked for you</p>
      </div>
      <div>
        <Col>
          {" "}
          <Row className="justify-content-end">
            <Button className="text-white mb-2" variant="warning">
              Upload Resume
            </Button>
          </Row>
          <Row className="justify-content-end">
            <Button variant="success">Create Job Alerts</Button>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default SectionImage;
