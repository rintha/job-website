import React from "react";
import { Button, Col } from "react-bootstrap";
// import OpenL from "./OpenL";

const Map = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div>
            <h2 className="text-center ">
              We are Popular <span className="text-warning">Everywhere</span>
            </h2>
            <p className="text-center " style={{ fontSize: "12px" }}>
              We bring together all the IT/Non-IT Job openings in the
              Business/Industrial/Tech parks across India to a single platform.
            </p>
            <div
              className="col-md-6 text-right "
              style={{ textAlign: "justify" }}
            >
              <p>States in India</p>
              <hr></hr>
              <p>KERALA</p>
              <p>
                Kerala is a state on the southwestern Malabar Coast of India.
                Technopark, is one of India's largest IT park located in Kerala,
                Trivandrum. It is Kerala's first IT park with more than 400
                companies employing more than 70,000 IT professionals.
                Technocity is an upcoming tech park in Trivandrum under
                construction and South India's largest World Trade Centre and
                World's fifth Nissan Global Digital Hub campus also coming here.
                Infopark and Cyberpark are another major IT parks in Kerala. The
                three IT parks together have more than 800 companies that
                provide employment to over 1 lakh IT professionals.
              </p>
              <div className="mt-3" style={{ display: "flex" }}>
                <Col
                  className="me-2"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                    transition: "background-color 0.3s ease",
                  }}
                  md={4}
                >
                  <span>
                    <img
                      src="https://technoparkjobs.com/frontend/images/box-img1.png"
                      alt=""
                    />
                  </span>
                  <h2>1188</h2>
                  <h6>Jobs</h6>
                </Col>
                <Col
                  className="me-2"
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                    transition: "background-color 0.3s ease",
                  }}
                  md={4}
                >
                  <span>
                    <img
                      src="https://technoparkjobs.com/frontend/images/box-img2.png"
                      alt=""
                    />
                  </span>
                  <h2>100</h2>
                  <h6>Total Company</h6>
                </Col>
                <Col
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                    transition: "background-color 0.3s ease",
                  }}
                  md={4}
                >
                  <img
                    src="https://technoparkjobs.com/frontend/images/box-img3.png"
                    alt=""
                  />
                  <h2>52667</h2>
                  <h6>Candidates</h6>
                </Col>
              </div>
              <div className="text-end">
                <Button className="mt-2" variant="danger">
                  More Details
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 img"><OpenL/></div> */}
        </div>
      </div>
    </section>
  );
};

export default Map;
