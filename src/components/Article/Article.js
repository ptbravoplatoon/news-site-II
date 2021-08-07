import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Article = (props) => {
  const { title, created_date: createdDate, abstract, byline, multimedia } = props;

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
export default Article;
