import React, { Component } from 'react';
import { Media } from 'reactstrap';



class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline, multimedia } = this.props.article;
    const image = multimedia[0].url
    
    return (
      <Media className='d-flex'>
        <Media left href="#">
          { image && <Media object src={image} alt="placeholder" /> }
        </Media>
        <Media body>
          <Media heading>
            { title }
          </Media>
          { byline && <span>{ byline }</span>} - { createdDate }<br />
          { abstract }
        </Media>
      </Media>
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
