import React, { Component } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];

    this.state = {
      navItems: navItems,
      article: {
        id: randomArticleIndex,
        title: randomArticle.title,
        abstract: randomArticle.abstract,
        byline: randomArticle.byline,
        image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
        created_date: randomArticle.created_date
      }
    }
  }

  render() {
    const { navItems } = this.state
  
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
}

export default App;
