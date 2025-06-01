import React, {Fragment, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu(props) {

    const [token, setToken] = useState("");
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            {token ?
                                <Fragment>
                                <Nav.Link href="/logout">Logout</Nav.Link>
                                    <Nav.Link href="/create_post">Create Post</Nav.Link>
                                </Fragment>:
                                <Fragment>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>

                                </Fragment>
                                }
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/condition">Condition</NavDropdown.Item>
                                <NavDropdown.Item href="/loop">
                                    Loop
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/fechdata">Fetch Data</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Menu;