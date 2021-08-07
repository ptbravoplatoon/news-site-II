import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <h1>{ article.title }</h1>
        <p>{ article.createdDate }</p>
        { article.byline && <h2>{ article.byline }</h2> }
        { article.image && <img src={ article.image }/> }
        <p>{ article.abstract }</p>
      </div>
    )
  }
}

export default Article;


// Functional solution:
// function Article({ title, created_date: createdDate, abstract, byline, image }) {
//   return (
//     <div>
//       <h1>{ title }</h1>
//       <p>{ createdDate }</p>
//       { byline && <h2>{byline}</h2> }
//       { image && <img src={image} /> }
//       <p>{ abstract }</p>
//     </div>
//   );
// }
