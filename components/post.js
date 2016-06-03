import React from 'react';

const Post = React.createClass({
  onClick() {
    this.props.onClickPost(this.props.id)
  },
  render() {
    return (
      <article
        className="post"
        onClick={this.onClick}
      >
        <h1>{this.props.title}</h1>
        <em>Author: {this.props.author}</em>

        <p>{this.props.text}</p>
      </article>
    )
  }
})

export default Post;