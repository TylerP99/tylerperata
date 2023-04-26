import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAddNewPostMutation } from "./postsSlice";

function AddPostForm() {

    const navigate = useNavigate();

    const [addNewPost, {isLoading, isSuccess, isError, error}] = useAddNewPostMutation();

    const [formData, setFormData] = useState({title: "", content: ""});
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setErrorMessage(null);
    }, [formData]);

    const handleFieldChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addNewPost(formData);
            console.log(res);

            if(res?.error) return setErrorMessage(res.error.data.error);
            console.log("Success");
        }
        catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1
            className="text-4xl border-b-black border-b-2 mb-5 p-4"
            >Create New Post</h1>
            <form
            onSubmit={handleSubmit}
            className="w-[95%] mx-auto"
            >
                <p>{errorMessage    }</p>
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
                >Create Post</button>
            </form>
        </>
    )
}

export default AddPostForm