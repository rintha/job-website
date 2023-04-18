import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import india from "../../../assets/India.png"


const InterMainSec = () => {
  return (
    <section className="m-5">
      <Row>
        <Col xs={12} md={6}>
          <Card style={{width:"20 rem" ,height:"10rem"}}>
         
            <Card.Img
              variant="top"
              src={india}
              onClick={() => {
                console.log("Image clicked");
              }}
            />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default InterMainSec;
