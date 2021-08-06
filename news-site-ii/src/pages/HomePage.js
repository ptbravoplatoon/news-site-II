import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';

function HomePage(props){
    return (
      <div>
        <ArticleList articles={News} handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
      </div>
    );
}

export default HomePage;
