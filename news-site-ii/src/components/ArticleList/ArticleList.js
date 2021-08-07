import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  render() {
    const { articles, handleTitleClick } = this.props;
    return (

        articles.map( (article, index) => {
          console.log(article.title, index);
          const restfulIndex = index + 1
          return <div>
            {
              <ArticleTeaser
                id={restfulIndex}
                title={article.title}
                created_date={article.created_date}
                handleTitleClick={() => {handleTitleClick(restfulIndex)} }/>
            }
          </div>
        }
        )

  
    );
  }
}

export default ArticleList;
