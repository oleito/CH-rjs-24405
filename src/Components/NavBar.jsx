import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <>
            <Navbar style={{ backgroundColor: '#3322aa' }} expand="md" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand href="#home" style={{ color: '#fff' }}>Tienda Lean</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link style={{ color: '#fff' }} href="#home">Home</Nav.Link>
                            <Nav.Link style={{ color: '#fff' }} href="#link">Promociones</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        <FontAwesomeIcon icon={faCartShopping} style={{ marginTop: '8px', color: '#fff' }} />
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    )
}