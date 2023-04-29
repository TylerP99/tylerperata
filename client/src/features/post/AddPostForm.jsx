import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAddNewPostMutation } from "./postsSlice";

import { FaTimes, FaExclamationCircle } from "react-icons/fa";

import SpinnerButton from "../../components/SpinnerButton";

function AddPostForm() {

    const navigate = useNavigate();

    const [addNewPost, {isLoading, isSuccess, isError, error}] = useAddNewPostMutation();

    const [formData, setFormData] = useState({title: "", content: ""});
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        setErrorMsg(null);
    }, [formData]);

    const handleFieldChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleDismiss = (e) => {
        e.preventDefault();
        setErrorMsg(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addNewPost(formData).unwrap();
            navigate("/admin/posts")
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
                className="text-2xl mx-auto text-center mb-7 w-fit border-b-2 border-white px-2"
                >Add New Post</h2>

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
                text="Add Post"
                isLoading={isLoading}
                />
            </form>
        </div>
    )
}

export default AddPostForm