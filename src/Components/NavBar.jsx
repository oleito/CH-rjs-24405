import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#3322aa" }} expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="#home" style={{ color: "#fff" }}>
              Tienda Lean
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link style={{ color: "#fff" }} href="#home">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }} href="#link">
                Promociones
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            <CartWidget />
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
