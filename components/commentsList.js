import React from 'react';
import CommentForm from '../containers/createComment';

const CommentsList = ({comments}) => (
  <section className="commentsList">
    {comments.map((comment) => {
      return (
        <aside key={comment.id}>
          <h1>{comment.author}</h1>
          <p>{comment.text}</p>
        </aside>
      )
    })}

    <CommentForm />
  </section>
)

export default CommentsList;