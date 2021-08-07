import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class AppNav extends Component {

  state = {
    isOpen :false
  }
  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <Navbar color = "light" light expand="md" >
          <nav className="mr-auto">
            {navItems.map((navItem) =>

              <a href="#" onClick={ () => handleNavClick(navItem.value)} >
                {navItem.label} |
              </a>

            )}
          </nav>
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