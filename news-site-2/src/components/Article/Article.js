import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'

// Functional solution:
const Article = (props) => {
  const { title, created_date: createdDate, abstract, byline, multimedia } = props
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
  );
}

export default Article;

// Class solution:
// class Article extends Component {
//   render() {
//     const { title, created_date: createdDate, abstract, byline, multimedia } = this.props;
//     const image = multimedia.length ? multimedia[0].url : null
    
//     return (
//       <div>
//         <Container>
//           <Row>
//             <h1>{ title }</h1>
//           </Row>
//         </Container>
//         <p>{ createdDate }</p>
//         { byline && <p>{ byline }</p> }
//         <br></br>
//         <Container>
//           { image && <img src={ image }/> }
//         </Container>
//         <br></br>
//         <Container>
//           <h3>{ abstract }</h3>
//         </Container>
//       </div>
//     )
//   }
// }
