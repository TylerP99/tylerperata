import { useSelector } from "react-redux";
import { FaPlus, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useGetPostsQuery, selectAllPosts } from "./postsSlice";


function PostList() {

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  const posts = useSelector(selectAllPosts);

  const renderedPosts = !posts.length ? 
  <p
  className="text-2xl bold mx-auto w-fit"
  >No posts</p> 
  :
  posts.map(x => (
        <article 
        className="border-2 rounded-md p-4 mb-3 w-[95%] mx-auto"
        key={x._id} 
        >
          <div
          className="flex items-center justify-between"
          >
            <Link to={`/blog/${x._id}`} >
              <h3
              className="bold text-xl"
              >{x.title}</h3>
            </Link>
          </div>
          <p
          className="text-sm italics"
          >{new Date(x.createdAt).toLocaleString()}</p>
          <p>{x.content.slice(0,100) + (x.content.length >= 100 ? "..." : "")}</p>

        </article>
    ));

  return (
    <>
      <h1
      className="text-4xl border-b-black border-b-2 mb-5 p-4"
      >Posts</h1>
      {renderedPosts}
    </>
  );
}

export default PostList