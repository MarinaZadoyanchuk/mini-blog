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
  }
  return state;
};

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
          text: action.text,
          title: action.title,
          user: action.userName
        }
      ]
  }
  return state;
}

export const mainReducer = combineReducers({
  users,
  currentPage,
  currentUser,
  posts
})

