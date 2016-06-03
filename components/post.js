import React from 'react';
import CommentsList from '../containers/commentsList';

const Post = React.createClass({
  onClickPost(e) {
    e.preventDefault();
    this.props.onClickPost(this.props.id)
  },
  onClickLike() {
    this.props.onClickLike(this.props.id)
  },
  render() {
    return (
        <section>
          <article
            className="post"
            onClick={this.onClickPost}
          >
            <h1>{this.props.title}</h1>
            <em>Author: {this.props.author}</em>
    
            <p>{this.props.text}</p>
            {
              this.props.currentPage == 'post' ?
                <div>
                  <span className="glyphicon glyphicon-heart-empty postLike" onClick={this.onClickLike}></span>
                  <span>{this.props.likes}</span>
                </div> :
                ''
            }

          </article>
  
          {!this.props.list ? <CommentsList /> : ''}
        </section>
    )
  }
})

export default Post;