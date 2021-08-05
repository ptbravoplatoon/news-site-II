import React from 'react';

const ArticleTeaser = (props) => {

  const { id, title, created_date: createdDate, handleTitleClick } = props;

  return (
    <div>
      <a onClick={(event) => {
        event.preventDefault();
        handleTitleClick(id);
      }}>{ title }</a>
      <p>{ createdDate }</p>
    </div>
  );
};

export default ArticleTeaser;