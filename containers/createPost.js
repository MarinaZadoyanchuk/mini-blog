import { connect } from 'react-redux';
import createPostComponent from '../components/createPost';
import { createPost } from '../actions'

const mapStateToProps = (state) => {
  console.log(state);
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (title, text, userName) =>  dispatch(createPost(title, text, userName))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(createPostComponent)