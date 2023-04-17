import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SectionImage from "./SectionImage";

const Search = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "url('https://technoparkjobs.com/frontend/images/banner_01.jpg')",
          backgroundSize: "cover",
          height: "500px",
          position: "relative",
        }}
      >
        <div
          className="container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Form>
            <Row className="g-2">
              <Col lg className="d-flex flex-column flex-lg-row">
                <Form.Control
                  type="text"
                  placeholder="Which Job?"
                  className="mb-2 mb-lg-0 me-lg-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Location"
                  className="mb-2 mb-lg-0 me-lg-2"
                />
                <div className="input-group mb-2 mb-lg-0 me-lg-2">
                  <Form.Select>
                    <option>Experience</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Select>
                  {/* <span className="input-group-append">
                    <Button variant="success">
                      <i className="bi bi-search"></i>
                    </Button>
                  </span> */}
                </div>
              </Col>
              <Col lg={2} className="text-lg-end">
                <Button variant="success" className="w-100">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
          }}
        >
          <SectionImage />
        </div>
      </div>
    </section>
  );
};

export default Search;
