import React, { Component } from 'react';

function Article(props) {
    return (
      <div>
      <div className="card bg-light">
        <h1 className="h1 text-center">{props.title}</h1>
        <p className="text-center">{props.created_date}</p>
        {props.byline !== null && <h4 className="h4 text-center">{props.byline}</h4>}
      </div>
      <hr/>
        {props.multimedia[3] && <img src={props.multimedia[3].url}/>}
        <p>{props.abstract}</p>
      </div>
    )
}

export default Article;
