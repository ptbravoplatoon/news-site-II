import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
class ArticlePage extends Component {
  constructor(props) {
    super(props);
    const index = this.props.match.params.articleID;
    const article = News[index];
    this.state = {
      navItems: navItems,
      article: {
        id: index,
        title: article.title,
        abstract: article.abstract,
        byline: article.byline,
        image: article.multimedia.length ? article.multimedia[0].url : null,
        created_date: article.created_date
      }
    }
  }
    render() {
      const { navItems } = this.state
      return (<>
      <AppNav navItems={navItems} handleNavClick={(clickedItem) => {this.props.history.push("/"+clickedItem)}} />
      <div>Article Page</div>
      {/* printing a single article */}
      <Article 
        title ={this.state.article.title}
        created_date = {this.state.article.created_date}
        abstract = {this.state.article.abstract}
        byline={this.state.article.byline}
        image ={this.state.article.image}
      />

      </>
    );
  }
}

export default ArticlePage;
