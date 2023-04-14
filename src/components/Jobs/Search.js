import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import bg from "../../assets/bg.jpeg";
import Form from "react-bootstrap/Form";

const Search = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "500px",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Form>
          <Container>
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
          </Container>
        </Form>
      </div>
    </section>
  );
};

export default Search;
