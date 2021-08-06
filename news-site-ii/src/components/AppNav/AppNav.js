import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function AppNav(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let i = 0;

    const items = props.navItems.map((x) => {
      let item = (<NavItem key={i} onClick={() => props.handleNavClick(x.value)}>
        <NavLink>{x.label}</NavLink>
        </NavItem>);
      i++;
      return item;
      })

    return (
      <Navbar color="Light" light expand="md">
        <NavbarBrand href="/">News</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {items}
          </Nav>
        </Collapse>
      </Navbar>
    )
}

export default AppNav;
