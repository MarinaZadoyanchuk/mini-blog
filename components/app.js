import React, { PropTypes } from 'react';
import Login from '../containers/login';
import Header from '../components/header';
import CreatePostForm from '../containers/createPost';
import PostsList from '../containers/postsList';
import Post from '../containers/post';

const App = ({currentPage, currentUser, currentPost, onLogout, onGoToPage, posts}) => {
  switch (currentPage) {
    case 'main':
      return (<div>
        <Header onLogout={onLogout} onGoToPage={onGoToPage} />
        { currentUser }
      </div>)
    case 'login':
      return <Login />
    case 'createPost':
      return (
        <div>
          <Header onLogout={onLogout} onGoToPage={onGoToPage} />
          <CreatePostForm />
        </div>
      )
    case 'posts': 
      return (
        <div>
          <Header onLogout={onLogout} onGoToPage={onGoToPage}/>
          <PostsList filter="SHOW_ALL" />
        </div>
      )
    case 'own_posts':
      return (
        <div>
          <Header onLogout={onLogout} onGoToPage={onGoToPage} />
          <PostsList filter="SHOW_OWN" />
        </div>
      )
    
    case 'post':
      return (
        <div>
          <Header onLogout={onLogout} onGoToPage={onGoToPage} />
          <Post />
        </div>
      )
    
  }
}

App.PropTypes = {
  currentPage: PropTypes.string.isRequired
}

export default App;