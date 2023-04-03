import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { selectPostById, updatePost } from "./blogPostSlice";

function EditPostPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(updatePost({title:formData.title, content: formData.content, id}));

      navigate(`/blog/${id}`)
  }

  return (
    <>
        <h1
        className="text-4xl border-b-black border-b-2 mb-5 p-4"
        >Edit Post</h1>

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
                    className="border p-1 text-lg"
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
                    className="border resize-none p-1 text-lg h-[400px]"
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