import React, { Fragment, useState } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

const ArticlePage = (props) => {

  const [dispArt, setDispArt] = useState(News[props.match.params.articleID])

  return (
    <Fragment>
      <div>Article Page</div>
      <Article article={dispArt} />
    </Fragment>
  );
};

export default ArticlePage;
