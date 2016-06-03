import {connect} from 'react-redux';
import PostComponent from '../components/post';
import { showPost } from '../actions';


const mapStateToProps = (state, ownProp) => {
  if (ownProp.list) return state;
  
  const post = state.posts.filter((post) => post.id === state.currentPost);
  
  return Object.assign({}, post[0]);
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPost: (postId) => dispatch(showPost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)

