//Challenge: Scaffold out the Navbar component
// Use reactstrap to create the navbar
// Brand should say: ToDo
// 2 links: Lists, Login

import React, { useState } from 'react';

import {Navbar, NavItem, NavLink, NavbarBrand, Nav, Collapse, NavbarToggler,} from 'reactstrap';

// Challenge:
// Create 2 state variables, and wire up the two input fields with the state variables

const Navigation = () => {
//          var      function
    const [isOpen, changeIsOpen] = useState(false);
    


    const toggleNavBarMenu = () => changeIsOpen(!isOpen);

    
    return (
        
            <Navbar color = 'light' >
            <NavbarBrand>Mr. ToDo</NavbarBrand>
                <NavbarToggler onClick={toggleNavBarMenu} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href = "https://reactstrap.github.io/components/navbar/"> Lists </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href = "https://google.com"> Login </NavLink>
                </NavItem>
                 </Nav>
                </Collapse>
            </Navbar>
        
    );
}

export default Navigation;