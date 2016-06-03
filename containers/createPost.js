import { connect } from 'react-redux';
import CreatePostComponent from '../components/createPost';
import { createPost, goToPage } from '../actions'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatePost: (title, text, author) =>  dispatch(createPost(title, text, author)),
    goToPosts: (pageName) => dispatch(goToPage(pageName))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePostComponent)