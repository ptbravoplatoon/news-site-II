import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'

const ArticleTeaser = (props) => {
  
  const { id, title, created_date: createdDate, handleTitleClick } = props;
    return (
      <ListGroup>
        <ListGroupItem>
          <a onClick={ (event) => {
            event.preventDefault();
            handleTitleClick(id) }}>{ title }</a>
          <p>{ createdDate }</p>
        </ListGroupItem>
      </ListGroup>
    )
}
export default ArticleTeaser;