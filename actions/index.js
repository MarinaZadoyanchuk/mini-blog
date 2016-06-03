
export const login = (userName) => {
  return {
    type: 'LOG_IN',
    userName
  }
}

export const logout = () => {
    return {
      type: 'LOG_OUT'
    }
}

export const goToCreatePostPage = () => {
  return {
    type: 'GO_TO_CREATE_POST'
  }
}

export const createPost = (title, text, userName) => {
  return {
    type: 'CREATE_POST',
    title,
    text,
    userName
  }
}