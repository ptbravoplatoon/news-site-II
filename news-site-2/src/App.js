import React, { Component, useState } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

// Functional solution:
const App = () => {

  return (
  <div>
    <h1>AppNav Component</h1>
    <hr />
    <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/articles/:articleID" component={ArticlePage} />
      </div>
    </Router>
  </div>
);
}


export default App;

// Class solution:
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       navItems: navItems,
//     }
//   }

//   render() {
//     const { navItems } = this.state
  
//     return (
//       <div>
//         <h1>AppNav Component</h1>
//         <hr />
//         <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
//         <Router>
//           <div>
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/articles/:articleID" component={ArticlePage} />
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }
