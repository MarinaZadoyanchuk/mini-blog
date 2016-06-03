import React, { PropTypes } from 'react';
import Login from '../containers/login';
import Header from '../components/header';
import createPostForm from '../containers/createPost';

const App = ({currentPage, currentUser, onLogout, onGoToCreatePostPage}) => {
  console.log(currentPage);
  switch (currentPage) {
    case 'main':
      return (<div>
        <Header onLogout={onLogout} onGoToCreatePostPage={onGoToCreatePostPage} />
        { currentUser }
      </div>)
    case 'login':
      return <Login />
    case 'createPost':
      return (
        <div>
          <Header onLogout={onLogout} onGoToCreatePostPage={onGoToCreatePostPage} />
          <createPostForm userName={currentUser} />
        </div>
      )
    
  }
}

App.PropTypes = {
  currentPage: PropTypes.string.isRequired
}

export default App;