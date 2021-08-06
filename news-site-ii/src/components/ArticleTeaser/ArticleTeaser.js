import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    return (
      <div className="card bg-light" style={{margin: '20px'}}>
        <a className="h5 text-center text-decoration-none card-title" onClick={(event) => {
          event.preventDefault();
          this.props.handleTitleClick(this.props.id);
          }}>{this.props.title}</a>
        <p className="font-weight-light text-center card-subtitle">{this.props.created_date}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
