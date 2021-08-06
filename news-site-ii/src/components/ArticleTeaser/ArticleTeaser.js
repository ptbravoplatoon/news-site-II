import React, { Component } from 'react';

function ArticleTeaser(props){
  return (
    <div className="card bg-light" style={{margin: '20px'}}>
      <a className="h5 text-center text-decoration-none card-title" onClick={(event) => {
        event.preventDefault();
        props.handleTitleClick(props.id);
        }}>{props.title}</a>
      <p className="font-weight-light text-center card-subtitle">{props.created_date}</p>
    </div>
  )
}

export default ArticleTeaser;
