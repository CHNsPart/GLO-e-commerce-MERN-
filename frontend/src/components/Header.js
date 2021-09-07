import React from 'react'
import logo from '../assets/LOGO.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="black" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img height="40px" width="auto" src={logo} alt="GLO logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="d-flex align-items-center justify-content-center" href="/cart"><i className='fas fa-shopping-cart'></i>
                            </Nav.Link>
                            <Nav.Link href="/login"><Button>sign in</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
