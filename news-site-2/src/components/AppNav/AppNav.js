import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'

// Functional solution:

const AppNav = (props) => {

  const {navItems, handleNavClick} = props

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



export default AppNav;

// Class solution:
// class AppNav extends Component {
//   render() {
//     const { navItems, handleNavClick } = this.props;

//     return (
//       <Navbar bg="light" expand="sm">
//         <Container>
//           <Nav className="me-auto">
//             {navItems.map((navItem) =>
//               <Nav.Link href={navItem.value}>{navItem.label}</Nav.Link>
//               // <a href="#" onClick={ () => handleNavClick(navItem.value)} >
//               //   {navItem.label} |
//               // </a>
//             )}
//           </Nav>
//         </Container>
//       </Navbar>
//     )
//   }
// }
