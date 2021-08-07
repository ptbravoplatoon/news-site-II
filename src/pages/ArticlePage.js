import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    const id = this.props.match.params.articleID;
    const article = News[(id-1)];

    const { title, created_date: createdDate, abstract, byline, image } = {...article};

    console.log("test", image)
    return (
      <div>
        <div>Article Page</div>
        <Article {...article}/>
      </div>
    );
  }
}

export default ArticlePage;

//const { title, created_date: createdDate, abstract, byline, image } = this.props;