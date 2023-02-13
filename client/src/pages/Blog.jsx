import React from 'react'

import Navigation from '../components/Navigation'
import PostList from '../features/blogPost/PostList'

function Blog() {
  return (
    <>
      <Navigation />
      <div>Blog</div>
      <PostList/>
    </>
  )
}

export default Blog