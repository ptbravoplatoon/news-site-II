import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

function ArticleList(props){
    let i = 1;
    const teasers = props.articles.map((a) => {
      let component = <div className="container" key={i}>
        <ArticleTeaser
        id={i}
        title={a.title}
        created_date={a.created_date}
        handleTitleClick={props.handleTitleClick} />
        </div>
      i++;
      return component;
  })
    return (
      <div>{teasers}</div>
    );
}

export default ArticleList;
