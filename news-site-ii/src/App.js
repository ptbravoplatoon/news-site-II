import React, { Component } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

class App extends Component {
  constructor(props) {
    super(props);
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];

    this.state = {
      navItems: navItems,
    }
  }

  render() {
    const { navItems } = this.state

    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />

        <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
        <Router>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/articles/:articleID" component={ArticlePage}/>
          </div>
        </Router>

        {/* <h1>ArticleTeaser Component</h1>
        <hr />

        <ArticleTeaser
          id={article.id}
          title={article.title}
          created_date={article.created_date}
          handleTitleClick={(articleID) => { console.log(articleID) }} />

        <h1>Article Component</h1>
        <hr />

        <Article {...article} /> */}
      </div>
    );
  }
}

export default App;
