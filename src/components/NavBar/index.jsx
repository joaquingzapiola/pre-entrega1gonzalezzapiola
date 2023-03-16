import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget";
import aeroplano from "../../assets/aeroplano.png";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <img src={aeroplano} alt="imagen logo avion" />{" "}
        <NavLink className="aHome" to="/">
          Viajar
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <NavLink className="a" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <NavLink className="a" to="/category/sur">
                  Sur
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <NavLink className="a" to="/category/norte">
                  Norte
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <NavLink className="a" to="/category/pampa">
                  Pampa
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
