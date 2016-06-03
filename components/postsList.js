import React from 'react';
import Post from '../containers/post';

const PostsList = ({posts}) => (
  <section className="postsList">
    {posts.map( (post) =>
      <Post key={post.id} {...post} list={true}></Post>
    )}
  </section>
)

export default PostsList;