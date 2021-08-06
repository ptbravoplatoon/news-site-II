import React, { Component } from 'react';
import Article from '../components/Article/Article.js';
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    const correctedIndex = this.props.match.params.articleID - 1
    const article = News[correctedIndex]
    return (
      <div>
        <Article article = {article} />
      </div>
    );
  }
}

export default ArticlePage;
