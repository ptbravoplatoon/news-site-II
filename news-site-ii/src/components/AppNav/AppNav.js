import React, { Component } from 'react';
import {
  Navbar,
} from 'reactstrap';

class AppNav extends Component {
  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <Navbar color="light" light expand="md">
        <nav>
          {navItems.map((navItem, i) =>
            <a href="#" key={i} onClick={ () => handleNavClick(navItem.value)} >
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
