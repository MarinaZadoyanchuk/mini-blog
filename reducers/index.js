import { combineReducers } from 'redux';

const users = (state = [], action) => {
  switch (action.type) {
    case 'LOG_IN':
      if (!state.filter((user) => user.userName === action.userName).length) {
        return [
          ...state,
          {
            userName: action.userName
          }
        ]
      }
  }
  return state;
}

const currentPage = (state = 'login', action) => {
  switch (action.type) {
    case 'LOG_IN':
      return 'main';
    case 'LOG_OUT':
      return 'login';
    case 'GO_TO_CREATE_POST':
      return 'createPost';
    case 'ALL_POSTS':
      return 'posts';
    case 'OWN_POSTS':
      return 'own_posts';
    case 'SHOW_POST':
      return 'post';
  }
  return state;
};

const currentPost = (state = null, action) => {
  switch(action.type) {
    case 'SHOW_POST':
      return action.currentPost
  }
  return state;
}

const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.userName;
    case 'LOG_OUT':
      return null;
  }
  return state;
}

const posts = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          title: action.title,
          author: action.author
        }
      ]
  }
  
  return state;
}


const comments = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          author: action.author,
          postId: action.postId
        }
      ]
  }

  return state;
}

export const mainReducer = combineReducers({
  users,
  currentPage,
  currentUser,
  currentPost,
  comments,
  posts
})

