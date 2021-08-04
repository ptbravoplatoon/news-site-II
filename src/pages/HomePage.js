import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
class HomePage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        navItems: navItems,
       }
  }
  render() {
    const { navItems } = this.state
    return (
      <div>
        <AppNav navItems={navItems} handleNavClick={(clickedItem) => {this.props.history.push("/"+clickedItem)}} />
        <ArticleList articles={News} handleTitleClick={(articleID) =>{this.props.history.push('/articles/'+articleID);} } />
      </div>
    );
  }
}

export default HomePage;
