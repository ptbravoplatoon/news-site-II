import React, { Component } from 'react';
import Article from '../Article/Article';

class ArticleTeaser extends Component {
  render() {
    return (
      <div>
        <button href="/" onClick={ () => {this.props.handleTitleClick(this.props.id)}}>{this.props.title}</button>
        <p>{this.props.created_date}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
