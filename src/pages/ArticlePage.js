import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    const index = this.props.match.params.articleID;
    const article = News[index];
    this.state = {
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
      return (<>
      <div>Article Page</div>
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
