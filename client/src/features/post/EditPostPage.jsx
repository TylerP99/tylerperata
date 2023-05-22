import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaExclamationCircle, FaTrash } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

import { selectPostById, useUpdatePostMutation, useDeletePostMutation } from "./postsSlice";
import SpinnerButton from "../../components/buttons/SpinnerButton";


function EditPostPage() {

  const navigate = useNavigate();

  const [updatePost, {isLoading}] = useUpdatePostMutation();
  const [deletePost, {isLoading: deleteLoading}] = useDeletePostMutation();

  const {id} = useParams();
  const post = useSelector( (state) => selectPostById(state, id) );

  const [formData, setFormData] = useState({title: "", content: ""});

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setErrorMsg(null);
  }, [formData]);

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

  const handleDismiss = (e) => {
    e.preventDefault();
    setErrorMsg(null);
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        await updatePost({title: formData.title, content: formData.content, _id: id}).unwrap();

        navigate(`/admin/posts`);
      }     
      catch(e) {
          console.error(e);
          if(!Number(e.status)) setErrorMsg("No server response");
          else setErrorMsg(e.data.error);
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
          if(!Number(e.status)) setErrorMsg("No server response");
          else setErrorMsg(e.data.error);
      }
  }

  return (
    <div
        className='bg-black text-white max-w-[750px] mx-auto border-white border-y-2'
        >
            <form
            className='py-8 px-16'
            onSubmit={handleSubmit}
            >

                <h2
                className="flex justify-between items-center text-2xl mx-auto text-center mb-7 w-full px-2"
                >
                    <div></div>
                    <span className="border-white border-b-2" >Add New Post</span>
                    <div className="flex relative items-center">
                        {deleteLoading && <ClipLoader size="30px" className="absolute left-[-130%]" color="#ffffff" />}
                        <button
                        className="block"
                        type="button"
                        onClick={handleDeletePost}
                        ><FaTrash/></button>
                    </div>
                </h2>

                {
                errorMsg !== null ?
                    <section className='flex justify-between items-center p-1 mb-5 border border-white' >
                    <p className="flex items-center gap-1" ><FaExclamationCircle color="rgb(239 68 68)" />{errorMsg}</p>
                    <button type='button' onClick={handleDismiss}><FaTimes/></button>
                    </section>
                : undefined
                }

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
                <SpinnerButton
                type="submit"
                text="Edit Post"
                isLoading={isLoading}
                />
            </form>
    </div>
  )
}

export default EditPostPage