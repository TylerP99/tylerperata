import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "./blogPostSlice";

function AddPostForm() {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({title: "", content: ""});

    const handleFieldChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        console.log("Form submit");
        e.preventDefault();
        dispatch(addPost(formData));
        console.log("End form submit");
    }

    return (
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <section
                className="flex flex-col"
                >
                    <label htmlFor="title">Title</label>
                    <input
                    className="border"
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleFieldChange}
                    value={formData.title}
                    required
                    />
                </section>
                <section
                className="flex flex-col"
                >
                    <label htmlFor="content">Content</label>
                    <textarea
                    className="border resize-none"
                    id="content"
                    name="content"
                    onChange={handleFieldChange}
                    value={formData.content}
                    required
                    />
                </section>
                <button 
                type="submit"
                className="border-2 rounded-md px-4 py-2 hover:underline"
                >Create Post</button>
            </form>
        </div>
    )
}

export default AddPostForm