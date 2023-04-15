import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CareerCard.css";

const CareerCard = () => {
  return (
    <a href="/" className="text-decoration-none">
      <Card style={{ width: "18rem" }} border="none" text="dark">
        <Card.Img
          variant="top"
          src="https://technoparkjobs.com/frontend/images/services/e-lerning.png"
          style={{ width: "80px" }}
          alt="Card image cap"
        />
        <Card.Body>
          <Card.Title>E-Learning</Card.Title>
          <Card.Text>
            Learn new trending skills with Course Xpress for getting a Better
            Job!
          </Card.Text>
          <Button variant="success">Join Now</Button>
        </Card.Body>
      </Card>
    </a>
  );
};

export default CareerCard;
