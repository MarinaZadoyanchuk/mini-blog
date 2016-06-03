import React, { PropTypes } from 'react';
import Login from '../containers/login';
import Header from '../components/header';
import CreatePostForm from '../containers/createPost';
import PostsList from '../containers/postsList';
import Post from '../containers/post';

const App = ({currentPage, currentUser, currentPost, onLogout, onGoToPage, posts}) => {
  const header = <Header onLogout={onLogout} onGoToPage={onGoToPage} />;
  
  switch (currentPage) {
    case 'main':
      return (
        <article>
          {header}
          <PostsList filter="SHOW_ALL" />
        </article>
      )
    case 'login':
      return <Login />

    case 'createPost':
      return (
        <article>
          {header}
          <CreatePostForm />
        </article>
      )
    case 'own_posts':
      return (
        <article>
          {header}
          <PostsList filter="SHOW_OWN" />
        </article>
      )

    case 'post':
      return (
        <article>
          {header}
          <Post />
        </article>
      )

  }
}

App.PropTypes = {
  currentPage: PropTypes.string.isRequired
}

export default App;