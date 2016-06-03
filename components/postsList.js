import React from 'react';
import Post from '../containers/post';

const PostsList = ({posts, currentPage, currentUser}) => (
  <section className="postsList">
    { currentPage == 'own_posts' ? <h1>Your posts</h1> : <h1>Hi, {currentUser}</h1>}
    
    {posts.map( (post) =>
      <Post key={post.id} {...post} list={true}></Post>
    )}
  </section>
)

export default PostsList;