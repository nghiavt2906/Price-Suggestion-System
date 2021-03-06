import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">PSS Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/optimize">Price optimization</Nav.Link>
            <Nav.Link href="/analysis">Data analysis</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant="primary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
