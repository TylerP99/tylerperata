import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updatePost } from "./blogPostSlice";

import { FaCog, FaEdit, FaSave, FaTimes } from "react-icons/fa"
import { selectOnePost } from "./blogPostSlice";
import { useState } from "react";

function BlogPage() {
    const dispatch = useDispatch();

    const {id} = useParams();

    const userRole = "editor"; // viewer, editor
    const post = useSelector((state) => selectOnePost(state, id));

    const [editing, setEditing] = useState(false);
    const [postData, setPostData] = useState({
        title: post.title,
        content: post.content,
    })

    const handleToggleEdit = (e) => {
        e.preventDefault();
        setEditing(!editing);
    }

    const handleSave = (e) => {
        e.preventDefault();

        dispatch(updatePost({title: postData.title, content: postData.content, id}));

        setEditing(!editing);
    }

    const handleChange = (e) => setPostData({...postData, [e.target.name]: e.target.value});

    const timeStamp = (
        <section
        className="italic text-sm"
        >
            <p>{`Last updated on ${new Date(post.updatedAt).toLocaleString()}`}</p>
            <p>{`Originally posted on ${new Date(post.createdAt).toLocaleString()}`}</p>
        </section>
    )

    const editorView = (
        <article
        className="mx-auto w-[70%]"
        >
            <section
            className="flex justify-between"
            >
                <h1
                className="text-4xl"
                >
                    <input
                    className="bg-inherit"
                    name="title"
                    id="title"
                    value={postData.title}
                    onChange={handleChange}
                    disabled={!editing}
                    />
                </h1>
                <section>
                    <button onClick={handleToggleEdit}>
                        {!editing ?
                        <FaEdit/>
                        :
                        <FaTimes/>
                        }
                    </button>
                    {editing && <button onClick={handleSave} ><FaSave/></button>}
                </section>
            </section>
            {timeStamp}
            <section>
                <textarea
                className="resize-none w-[90%] mx-auto bg-inherit"
                name="content"
                id="content"
                value={postData.content}
                onChange={handleChange}
                disabled={!editing}
                />
            </section>
        </article>
    )

    const normalView = (
        <article>
            <h1>{post.title}</h1>
            {timeStamp}
            <p>{post.content}</p>
        </article>
    )

    return (
        <div
        className="bg-slate-100 min-w-[80%] max-w-[1250px] mx-auto"
        >
        {userRole === "viewer" ? normalView : editorView}
        </div>
    )
}

export default BlogPage