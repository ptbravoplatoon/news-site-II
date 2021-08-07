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

function AppNav({ navItems, handleNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const items = navItems.map( (e) => {
    let item = (<NavItem 
      onClick={ () =>handleNavClick(e.value)}> 
      <NavLink>{e.label}</NavLink>
      </NavItem>);
      return item;
    })
  
  return (
    <div>
      <Navbar color="color" light expand="md">
        <NavbarBrand href="/">Article News</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {items}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default AppNav;