import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

import {getPosts, deletePost, selectAllPosts, selectPostStatus} from "./blogPostSlice";

import AddPostForm from "./AddPostForm";



function PostList() {

  const dispatch = useDispatch();
  
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostStatus);

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
  <p>No posts</p> 
  :
  posts.map(x => (
        <article 
        className="border-2 rounded-sm p-4 mb-3 w-[95%] mx-auto"
        key={x._id} 
        >
          <button 
          type="button"
          data-post-id={x._id}
          onClick={handleDeletePost}
          >
            <FaTrash/>
          </button>
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
        <AddPostForm/>
    </div>
  );
}

export default PostList