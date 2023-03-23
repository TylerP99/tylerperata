import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addPost } from "./blogPostSlice";

function AddPostForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({title: "", content: ""});

    const handleFieldChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        console.log("Form submit");
        e.preventDefault();
        dispatch(addPost(formData));
        console.log("End form submit");
        // TODO: If fail, display err

        navigate("/blog");
    }

    return (
        <div className="w-[97%] mx-auto">
            <h1
            className="text-2xl border-b-2 mb-4"
            >Create New Post</h1>
            <form
            onSubmit={handleSubmit}
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
                >Create Post</button>
            </form>
        </div>
    )
}

export default AddPostForm