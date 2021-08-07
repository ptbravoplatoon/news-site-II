import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'


class AppNav extends Component {
  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <Navbar bg="light" expand="sm">
        <Container>
          <Nav className="me-auto">
            {navItems.map((navItem) =>
              <Nav.Link href={navItem.value}>{navItem.label}</Nav.Link>
              // <a href="#" onClick={ () => handleNavClick(navItem.value)} >
              //   {navItem.label} |
              // </a>
            )}
          </Nav>
        </Container>
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
