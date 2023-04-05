import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStore from "../modules/UseStore";
import Cart from "../pages/Cart";


const NavbarCocktail = (): JSX.Element => {

    const quantity = useStore((state) => state.quantity);
    const [modalShow, setModalShow] = React.useState(false);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cocktail list</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Ordina per" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria">Categoria</NavDropdown.Item>
              <NavDropdown.Item href="/ingrediente">
                Ingredienti
              </NavDropdown.Item>
              <NavDropdown.Item href="/bicchiere">Bicchiere</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="">Login</Navbar.Brand>
        <div>
        <IconButton aria-label="cart">
          <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartIcon onClick={() => setModalShow(true)} />
            <Cart show={modalShow} onHide={() => setModalShow(false)}/>
          </Badge>
        </IconButton>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarCocktail;
