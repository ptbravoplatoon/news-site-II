import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {

  printTeasers = () => {
    return this.props.articles.map( (article, id) => {
      return <ArticleTeaser
        id={id}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={(articleID) => {this.props.handleTitleClick(articleID)}} />
    })
  }

  render() {
    return (
      <div>
        {this.printTeasers()}
      </div>
    );
  }
}

export default ArticleList;
