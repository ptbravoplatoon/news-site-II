import React, { Component, useState } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage.js';

const App = () => {

    return (
      <div>
        <h1>AppNav Component</h1>
        <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
        
        <Router>
        <h1>ArticleTeaser Component</h1>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
          </div>
        </Router>
      </div>
    )
}
export default App;
