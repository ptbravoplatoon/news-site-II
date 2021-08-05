import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

class AppNav extends Component {
  render() {
    const { navItems, handleNavClick } = this.props;

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
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <nav>
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick(navItem.value)} >
//           {navItem.label} |
//         </a>
//       )}
//     </nav>
//   );
// }
