import React from 'react';
import { Media } from 'reactstrap';

const Article = (props) => {

  const { title, created_date: createdDate, abstract, byline, multimedia } = props.article;
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
  );
};

export default Article;
