import {useSelector} from "react-redux";

import {selectAllPosts} from "./blogPostSlice";

function PostList() {
  
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(x => (
      <article key={x.id} >

        <h3>{x.title}</h3>
        <p>{x.content}</p>

      </article>
  ))


  return (
    <div>
        <h2>Posts</h2>
        {renderedPosts}
    </div>
  )
}

export default PostList