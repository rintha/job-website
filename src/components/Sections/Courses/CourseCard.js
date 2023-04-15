import React from "react";
import { Card, Button } from "react-bootstrap";

const CourseCard = () => {
  return (
    <div>
      <Card variant="light" style={{ width: "16rem" }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
