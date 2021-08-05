import React, { Component, Fragment } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {

  state = {
    dispArt: News[this.props.match.params.articleID],
  }

  render() {
    return (
      <Fragment>
        <div>Article Page</div>
        <Article article={this.state.dispArt} />
      </Fragment>
    );
  }
}

export default ArticlePage;
