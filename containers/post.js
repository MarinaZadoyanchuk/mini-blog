import {connect} from 'react-redux';
import PostComponent from '../components/post';
import { showPost, likePost } from '../actions';


const mapStateToProps = (state, ownProp) => {
  if (ownProp.list) return state;
  
  const post = state.posts.filter((post) => post.id === state.currentPost);
  
  return Object.assign({}, post[0], {currentPage: state.currentPage});
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPost: (postId) => dispatch(showPost(postId)),
    onClickLike: (postId) => dispatch(likePost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)

