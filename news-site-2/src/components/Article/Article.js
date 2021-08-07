import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'

class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline, multimedia } = this.props;
    const image = multimedia.length ? multimedia[0].url : null
    
    return (
      <div>
        <Container>
          <Row>
            <h1>{ title }</h1>
          </Row>
        </Container>
        <p>{ createdDate }</p>
        { byline && <p>{ byline }</p> }
        <br></br>
        <Container>
          { image && <img src={ image }/> }
        </Container>
        <br></br>
        <Container>
          <h3>{ abstract }</h3>
        </Container>
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
