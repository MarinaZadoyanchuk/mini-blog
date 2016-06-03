import { connect } from 'react-redux';
import CreateCommentComponent from '../components/createComment';
import { createComment } from '../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateComment: (text, author, postId) =>  dispatch(createComment(text, author, postId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentComponent)