import React from 'react'
import { Nav, Navbar, NavLink } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
         <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="nabarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Página Inicial</NavLink>
                    <NavLink eventKey="2" as={Link} to="/hoteis">Hotéis</NavLink>
                    <NavLink eventKey="3" as={Link}  to="/criar">Quarto personalizado</NavLink>
                    <NavLink eventKey="4" as={Link} to="/sobre-nos">Sobre nós</NavLink>
                    <NavLink eventKey="5" as={Link} to="/nosso-time">Nosso time</NavLink>
                    <NavLink eventKey="6" as={Link} to="/contato">Contatos</NavLink>
                    <NavLink eventKey="7" as={Link} to="*"></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    );
}

export default Header;
