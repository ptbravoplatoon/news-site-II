import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  
  getAllArticleTeasers = (articles) => {
    return articles.map((article, index) => {
      return (
        <ArticleTeaser 
          key={index}
          id={index}
          title={article.title}
          created_date={article.created_date}
          handleTitleClick={() => this.props.handleTitleClick(index+1)} />
          )
    })
  }
  
  render() {
    return (
      <div>
        {
          this.getAllArticleTeasers(this.props.articles)
        }
      </div>
    );
  }
}

export default ArticleList;
