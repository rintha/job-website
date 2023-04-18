import React from "react";
import { Card, Button } from "react-bootstrap";

const JobCard = ({ src, title, company, place }) => {
  return (
    <div className="mt-3" style={{ maxWidth: "800px" }}>
      <Card
        style={{
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "90%",
        }}
      >
        <Card.Body>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <div className="d-flex flex-column justify-content-start">
              {/* <Card.Title className="text-success mb-0">{title}</Card.Title> */}
              <Card.Text>
                <div className="d-flex align-items-center">
                  <img
                    src={src}
                    alt="Company Logo"
                    style={{
                      height: "100px",
                      width: "100px",
                      marginBottom: "15px",
                    }}
                    className="d-none d-md-block me-3"
                  />
                  <div>
                    <div>
                      <p style={{ fontSize:"18px",fontWeight:"bold"}} className="text-success mb-0 ">{title}</p>
                      <p style={{ fontSize: "14px", margin: "0" }}>
                        <i>{company}</i>
                      </p>
                    </div>
                    <div
                      className="d-flex justify-content-start"
                      style={{ marginTop: "10px" }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          marginRight: "10px",
                        }}
                      >
                        Full Time
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          marginRight: "10px",
                        }}
                      >
                        {place}
                      </p>
                      <p style={{ fontSize: "14px" }}>Not Disclosed</p>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </div>
            <Button
              variant="success"
              className="mt-3 mt-md-0 ms-md-3 align-self-md-center"
            >
              Apply Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobCard;
