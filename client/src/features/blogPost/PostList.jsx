import {useSelector} from "react-redux";

import {selectAllPosts} from "./blogPostSlice";

function PostList() {
  
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(x => (
      <article 
      className="border-2 rounded-sm p-4 mb-3 w-[95%] mx-auto"
      key={x.id} 
      >

        <h3
        className="bold text-xl mb-2"
        >{x.title}</h3>
        <p>{x.content.slice(0,100) + (x.content.length >= 100 ? "..." : "")}</p>

      </article>
  ));

  return (
    <div>
        <h2
        className="text-4xl border-b-black border-b-2 mb-5 p-4"
        >Posts</h2>
        {renderedPosts}
    </div>
  );
}

export default PostList