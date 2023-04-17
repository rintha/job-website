import React from "react";
import { Card, Button } from "react-bootstrap";
  
const JobCard = ({src}) => {
  return (
    <div className=" mt-3">
      <Card style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}>
        <Card.Body>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <Card.Img
                variant="left"
                src={src}
                style={{
                  height: "100px",
                  width: "100px",
                  marginBottom: "15px",
                }}
              />
              <div className="d-flex flex-column justify-content-start ms-lg-3">
                <Card.Title className="text-success mb-0">
                  Business Development Manager
                </Card.Title>
                <Card.Text>
                  <div>
                    <p style={{ fontSize: "14px", margin: "0" }}>
                      <i>Junior Dec 25 Pvt Ltd</i>
                    </p>
                  </div>
                  <div
                    className="d-flex flex-wrap align-items-center"
                    style={{ marginTop: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "5px",
                        marginRight: "10px",
                      }}
                    >
                      Full Time
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "5px",
                        marginRight: "10px",
                      }}
                    >
                      Thiruvananthapuram
                    </p>
                    <p style={{ fontSize: "14px", marginBottom: "0" }}>
                      25,000 - 45,000 Monthly
                    </p>
                  </div>
                </Card.Text>
              </div>
            </div>
            <Button variant="success" className="mt-3 mt-lg-0 ms-lg-3">
              Apply Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobCard;
