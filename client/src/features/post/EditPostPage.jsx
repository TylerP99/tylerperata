import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { selectPostById, useUpdatePostMutation, useDeletePostMutation } from "./postsSlice";

function EditPostPage() {

  const navigate = useNavigate();

  const [updatePost, {isLoading}] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const {id} = useParams();
  const post = useSelector( (state) => selectPostById(state, id) );

  const [formData, setFormData] = useState({title: "", content: ""});

  useEffect( () => {
    if(post) {
        setFormData({
            title: post.title,
            content: post.content,
        })
    }
  }, [post]);
  
  if(!post) {
      return (
          <h1>Post not found.</h1>
      )
  }

  const handleFieldChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        await updatePost({title: formData.title, content: formData.content, _id: id}).unwrap();

        navigate(`/admin/posts`);
      }     
      catch(e) {
          console.error(e);
      }
  }

  const handleDeletePost = async (e) => {
      e.preventDefault();

      try{
          await deletePost(id).unwrap();
          navigate("/admin/posts");
      }
      catch(e) {
          console.error(e);
      }
  }

  return (
    <>
        <h1
        className="text-4xl border-b-black border-b-2 mb-5 p-4"
        >Edit Post</h1>

        <button type="button" onClick={handleDeletePost}>Delete Post</button>

        <form
        onSubmit={handleSubmit}
        className="w-[95%] mx-auto"
        >
                <section
                className="flex flex-col mb-4"
                >
                    <label
                    className="text-xl"
                    htmlFor="title"
                    >Title</label>
                    <input
                    className="border p-1 text-lg bg-slate-800"
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleFieldChange}
                    value={formData.title}
                    required
                    />
                </section>
                <section
                className="flex flex-col mb-4"
                >
                    <label 
                    className="text-xl"
                    htmlFor="content"
                    >Content</label>
                    <textarea
                    className="border resize-none p-1 text-lg h-[400px] bg-slate-800"
                    id="content"
                    name="content"
                    onChange={handleFieldChange}
                    value={formData.content}
                    required
                    />
                </section>
                <button 
                type="submit"
                className="border-2 rounded-md px-4 py-2 w-[75%] mx-auto block hover:underline"
                >Edit Post</button>
            </form>
    </>
  )
}

export default EditPostPage