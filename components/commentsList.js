import React from 'react';
import CommentForm from '../containers/createComment';

const CommentsList = ({comments}) => (
  <section className="commentsList">
    <CommentForm />
    {comments.map((comment) => {
      return (
        <aside key={comment.id}>
          <h1>{comment.author}</h1>
          <p>{comment.text}</p>
        </aside>
      )
    })}
  </section>
)

export default CommentsList;