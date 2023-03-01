import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from "./CartWidget";
import aeroplano from '../assets/aeroplano.png';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container >
      <a className="navbar-brand" href="index.html"><img src={aeroplano} alt="imagen logo avion"/> Viajar</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Destacados</NavDropdown.Item>
              <NavDropdown.Item href="#">Paquetes de viaje</NavDropdown.Item>
              <NavDropdown.Item href="#">Presupuestador</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>

    </Navbar>
  );
}

