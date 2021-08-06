import React, { Component } from 'react';

class AppNav extends Component {

  render() {
    return (
      <nav>
        {this.props.navItems.map((item) => {return <button onClick={() => {this.props.handleNavClick(item.value)}} > {item.label} </button>})}
      </nav>
    )
  }
}

export default AppNav;
