import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    const id = this.props.match.params.articleID;
    const article = News[id-1];

    return (
      <div>
        <div>Article Page</div>
        <Article {...article}/>
      </div>
    );
  }
}

export default ArticlePage;
