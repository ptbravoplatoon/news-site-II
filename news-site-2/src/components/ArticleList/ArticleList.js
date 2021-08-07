import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class ArticleList extends Component {

  displayTeasers = () => {
    return this.props.articles.map( (article, id) => {
      const restfulID = id + 1
      return <ListGroupItem>
      <ArticleTeaser
        id={restfulID}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={(articleID) => {this.props.handleTitleClick(articleID)}} 
        />
        </ListGroupItem>
    })
  }

  render() {
    return (
      <div>
        <ListGroup variant="flush">
          {this.displayTeasers()}
        </ListGroup>
      </div>
    );
  }
}

export default ArticleList;


// Functional solution:
// function ArticleList ({ articles, handleTitleClick }) 
