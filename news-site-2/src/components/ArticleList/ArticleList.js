import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

// Functional solution:
const ArticleList = (props) => {

  const displayTeasers = () => {

    return props.articles.map( (article, id) => {
      const restfulID = id + 1
      
      return <ListGroupItem>
        <ArticleTeaser
        id={restfulID}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={(articleID) => {props.handleTitleClick(articleID)}} 
      />
      </ListGroupItem>
    })
  }

  return (
    <div>
      <ListGroup variant="flush">
        {displayTeasers()}
      </ListGroup>
    </div>
  );
};

export default ArticleList;

// Class solution: 
// class ArticleList extends Component {

//   displayTeasers = () => {
//     return this.props.articles.map( (article, id) => {
//       const restfulID = id + 1
//       return <ArticleTeaser
//         id={restfulID}
//         title={article.title}
//         created_date={article.created_date}
//         handleTitleClick={(articleID) => {this.props.handleTitleClick(articleID)}} />
//     })
//   }

//   render() {
//     return (
//       <div>
//         <ListGroup variant="flush">
//           <ListGroup.Item>{this.displayTeasers()}</ListGroup.Item>
//         </ListGroup>
//       </div>
//     );
//   }
// }
