import { connect } from 'react-redux';
import CommentsListComponent from '../components/commentsList';

const getCommentsByPostId = (comments, postId) => {
  return comments.filter( (comment) => comment.postId == postId )
}

const mapStateToProps = (state) => {
  console.log(state.comments, state.currentPost);
  return {
    comments: getCommentsByPostId(state.comments, state.currentPost)
  }
}


export default connect(mapStateToProps)(CommentsListComponent)