import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import {ListGroup} from 'react-bootstrap'

class ArticleList extends Component {

  displayTeasers = () => {
    return this.props.articles.map( (article, id) => {
      const restfulID = id + 1
      return <ArticleTeaser
        id={restfulID}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={(articleID) => {this.props.handleTitleClick(articleID)}} />
    })
  }

  render() {
    return (
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item>{this.displayTeasers()}</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default ArticleList;


// Functional solution:
// function ArticleList ({ articles, handleTitleClick }) 
