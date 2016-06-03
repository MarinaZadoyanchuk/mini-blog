import React, { PropTypes } from 'react';
import Login from '../containers/login';
import Header from '../components/header';
import CreatePostForm from '../containers/createPost';
import PostsList from '../containers/postsList';
import Post from '../containers/post';

const App = ({currentPage, onLogout, onGoToPage}) => {
  const header = <Header onLogout={onLogout} onGoToPage={onGoToPage} currentPage={currentPage}/>;
  
  switch (currentPage) {
    case 'home':
      return (
        <article>
          {header}
          <PostsList filter="SHOW_ALL" />
        </article>
      )
    case 'login':
      return <Login />

    case 'create_post':
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