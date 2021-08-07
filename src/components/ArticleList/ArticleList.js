import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  render() {

    const { articles, handleTitleClick } = this.props;

    return (
      <div>
        {articles.map((article, index) => 
          <ArticleTeaser 
            id={index+1} 
            title={article.title} 
            created_date={article.created_date} 
            handleTitleClick={handleTitleClick} />
        )}
      </div>
    );
  }
}

export default ArticleList;