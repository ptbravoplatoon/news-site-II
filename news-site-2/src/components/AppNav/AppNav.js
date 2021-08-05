import React from 'react';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

const AppNav = (props) => {

  const { navItems, handleNavClick } = props;

  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        {navItems.map((navItem) =>
          <NavItem>
            <NavLink>
              {navItem.label} |
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNav;