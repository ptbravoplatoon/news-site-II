import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline, multimedia } = this.props;
    return (
      <div>
        <Card>
          <CardImg src={ multimedia[3].url } alt="No Image Available" />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{byline}</CardSubtitle>
            <CardText>{abstract}</CardText>
            <CardText tag="footer">{createdDate}</CardText>
          </CardBody>
        </Card>
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
