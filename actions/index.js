
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

export const goToPage = (pageName) => {
  return {
    type: pageName.toUpperCase()
  }
}

export const showPost = (postId) => {
  return {
    type: "SHOW_POST",
    currentPost: postId
  }
}

let nextPostId = 0;
export const createPost = (title, text, author, likes = 0) => {
  return {
    type: 'CREATE_POST',
    id: nextPostId++,
    title,
    text,
    author,
    likes
  }
}

export const likePost = (postId) => {
  return {
    type: 'LIKE_POST',
    postId
  }
}

let nextCommentId = 0;

export const createComment = (text, author, postId) => {
  return {
    type: 'CREATE_COMMENT',
    id: nextCommentId++,
    text,
    author,
    postId
  }
}
