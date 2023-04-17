import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const JobHeader = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light">
        <Container>
          <Navbar.Brand>TechnoPark</Navbar.Brand>
          <div className="text-end"></div>
          <Button variant="outline-success">Login</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default JobHeader;
