import {connect} from 'react-redux';
import PostsListComponent from '../components/postsList';
import { showPost } from '../actions';

const filterPosts = (posts, filter, user) => {
  switch(filter) {
    case 'SHOW_ALL':
      return posts;
    case 'SHOW_OWN':
      return posts.filter((post) => post.author === user)
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    posts: filterPosts(state.posts, ownProps.filter, state.currentUser),
    currentPage: state.currentPage,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PostsListComponent)





