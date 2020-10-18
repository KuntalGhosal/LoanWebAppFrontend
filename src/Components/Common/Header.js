import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, Row } from 'reactstrap';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div>
            <Navbar dark color='primary' expand="lg">

                <NavLink to="/" className="navlink-item" className="logo-head">
                    InstantLoan
                        </NavLink>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="ml-2">
                            <NavLink to="/" className="navlink-item">Home</NavLink>
                        </NavItem>
                        <NavItem className="ml-2">
                            <NavLink to="/About" className="navlink-item">About</NavLink>
                        </NavItem>
                        <NavItem className="ml-2">
                            <NavLink to="/Contact" className="navlink-item">Contact</NavLink>
                        </NavItem>
                        <NavItem className="ml-2">
                            <NavLink to="/Signup" className="navlink-item">Sign up</NavLink>
                        </NavItem>
                        <NavItem className="ml-2">
                            <NavLink to="/login" className="navlink-item">Log In</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>

    );
}

export default Header;