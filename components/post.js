import React from 'react';
import CommentsList from '../containers/commentsList';

const Post = React.createClass({
  onClick() {
    this.props.onClickPost(this.props.id)
  },
  render() {
    return (
      <div>
        <article
          className="post"
          onClick={this.onClick}
        >
          <h1>{this.props.title}</h1>
          <em>Author: {this.props.author}</em>
  
          <p>{this.props.text}</p>
        </article>
        {!this.props.list ? <CommentsList /> : ''}
      </div>
    )
  }
})

export default Post;