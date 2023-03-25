import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";

import {getPosts, deletePost, selectAllPosts, selectPostStatus} from "./blogPostSlice";



function PostList() {

  const dispatch = useDispatch();
  
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostStatus);

  const userRole = "editor"; // viewer || editor

  useEffect(() => {
    if(postStatus === "idle") {
      dispatch(getPosts());
    }
  },[postStatus, dispatch])

  const handleDeletePost = (e) => {
    e.preventDefault();    
    const id = e.currentTarget.dataset.postId;
    console.log(id);

    dispatch(deletePost(id));
  }

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
            {
            userRole === "editor" &&
            <button 
            type="button"
            data-post-id={x._id}
            onClick={handleDeletePost}
            >
              <FaTrash/>
            </button>
            }
          </div>
          <p
          className="text-sm italics"
          >{new Date(x.createdAt).toLocaleString()}</p>
          <p>{x.content.slice(0,100) + (x.content.length >= 100 ? "..." : "")}</p>

        </article>
    ));

  return (
    <div>
        <h2
        className="text-4xl border-b-black border-b-2 mb-5 p-4"
        >Posts</h2>
        {
        userRole === "editor" &&
        <Link 
        className="flex items-center border-2 gap-2 rounded-md w-[95%] px-5 py-3 mx-auto mb-3"
        to="./newPost"
        >
          <FaPlus/>Create New Post
        </Link>
        }
        {renderedPosts}
    </div>
  );
}

export default PostList