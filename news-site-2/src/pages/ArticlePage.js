import React, { Component, useState } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

// Functional solution:
const ArticlePage = (props) => {
  const [displayArticle, setDisplayArticle] = useState(News[props.match.params.articleID])
  const article = News[props.match.params.articleID - 1]

  return (
    <div>
      <Article {...article} />

    </div>
  )
}

export default ArticlePage;

// Class solution:
// class ArticlePage extends Component {
  
//   render() {
    
//     const id = this.props.match.params.articleID
//     const article = News[id - 1]
    
//     return (
//       <div>
//         <Article {...article} />

//       </div>
//     );
//   }
// }
