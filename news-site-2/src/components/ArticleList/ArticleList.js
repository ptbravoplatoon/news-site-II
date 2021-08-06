import React from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { ListGroup, ListGroupItem } from 'reactstrap'

const ArticleList = (props) => {

  const printTeasers = () => {
    return props.articles.map( (article, id) => {
      return <ListGroupItem>
        <ArticleTeaser
        id={id}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={(articleID) => {props.handleTitleClick(articleID)}} />
        </ListGroupItem>
    })
  }

  return (
    <ListGroup>
      {printTeasers()}
    </ListGroup>
  );
};

export default ArticleList;