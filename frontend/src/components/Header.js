import React from 'react'
import logo from '../assets/LOGO.png';
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="black" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand><img height="40px" width="auto" src={logo} alt="GLO logo" /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <LinkContainer to="/cart">
                            <Nav.Link 
                            className="d-flex align-items-center justify-content-center"><i className='fas fa-shopping-cart'></i>
                            </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/register">
                            <Nav.Link className="d-flex align-items-center justify-content-center"><Button>Register</Button></Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
