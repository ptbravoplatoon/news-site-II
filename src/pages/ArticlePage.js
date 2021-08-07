import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

const ArticlePage = (props) => {

  const id = props.match.params.articleID;
  const article = News[(id-1)];

  const { title, created_date: createdDate, abstract, byline, image } = {...article};

  return (
      <div>
        <div>Article Page</div>
        <Article {...article}/>
      </div>
    );
}
export default ArticlePage;
