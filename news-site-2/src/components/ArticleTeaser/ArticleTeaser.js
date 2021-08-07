import React, { Component } from 'react';

// Functional solution:
  /* Note: the { created_date: createdDate } syntax in this destructure is
      taking the value of created_date from this.props and setting it to
      a new variable called createdDate
  */
const ArticleTeaser = (props) => {
  const { id, title, created_date: createdDate, handleTitleClick } = props

  return (
    <div>
      <a href="#" onClick={(event) => {
        event.preventDefault();
        handleTitleClick(id) }}
      >{ title }</a>
      <p>{ createdDate }</p>
    </div>
  );
}

export default ArticleTeaser;


// class ArticleTeaser extends Component {
//   render() {
//     /* Note: the { created_date: createdDate } syntax in this destructure is
//         taking the value of created_date from this.props and setting it to
//         a new variable called createdDate
//     */
//     const { id, title, created_date: createdDate, handleTitleClick } = this.props;

//     return (
//       <div>
//         <a href="#" onClick={(event) => {
//           event.preventDefault();
//           handleTitleClick(id) }}
//         >{ title }</a>
//         <p>{ createdDate }</p>
//       </div>
//     )
//   }
// }