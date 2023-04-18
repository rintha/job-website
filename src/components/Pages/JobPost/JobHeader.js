import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import mainlogo from "../../../assets/logo-main.png";

const JobHeader = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light">
        <Container>
        <Navbar.Brand href="/">
            <img src={mainlogo} width="200px" height="60px" alt=" logo" />
          </Navbar.Brand>
          <div className="text-end"></div>
          <Button variant="outline-success">Login</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default JobHeader;
