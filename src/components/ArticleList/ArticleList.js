import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

const ArticleList = (props) => {

  const { articles, handleTitleClick } = props;

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
export default ArticleList;