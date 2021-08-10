import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../context/carritoContext';
import { AuthContext } from '../context/authContext';

import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';



export default function NavTop() {

    const { carrito } = useContext(CarritoContext)
    const { userState, signOut } = useContext(AuthContext);

    const totalCarrito = carrito.reduce((total,item) => {
        return total + item.cantidad
    },0)

    return (

            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Store Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/">
                            Inicio
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/productos">
                            Productos
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to="/carrito">
                            Carrito
                            <Badge badgeContent={totalCarrito} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                        </Link>
                    </Nav.Link>
                    {userState ? (
						<Nav.Link>
							<span onClick={signOut}>Salir</span>
						</Nav.Link>
					) : (
						<Nav.Link>
							<Link to="/login">Ingresar</Link>
						</Nav.Link>
					)}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

    )
}