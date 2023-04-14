import React from "react";
import { Navbar, Container, Nav, Button ,NavDropdown} from "react-bootstrap";

const Header = () => {
  return (
    <>
     <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TechnoPark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav >
            <Button className="me-2" variant="outline-success">Register</Button>
            <Button className="me-2" variant="outline-primary">Post a Job</Button>
            <Nav.Link href="#home">SignIn</Nav.Link>
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ENGLISH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">HINDI</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
