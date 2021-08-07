import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';
import {
  Navbar,
} from 'reactstrap';

class ArticlePage extends Component {
  render() {
    const articleIndex = this.props.match.params.articleID - 1;
    const article = News[articleIndex];
    const image = article.multimedia.length ? article.multimedia[2].url : null;

    return (
      <Navbar color="light" light expand="md">
        <div>
          {article ? <Article {...article } image={ image } /> :
            <span>404: Article Not Found</span>
          }
        </div>
      </Navbar>
    );
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const articleIndex = props.match.params.articleID - 1;
//   const article = News[articleIndex];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
