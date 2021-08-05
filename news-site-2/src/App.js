import React, { useState } from 'react';
import rawNavItems from './data/navItems.json';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js'
import ArticlePage from './pages/ArticlePage.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

  const [navItems, setNavItems] = useState(rawNavItems)

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
};

export default App;
