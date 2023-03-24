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
        className="w-[98%] max-w-[1250px] mx-auto bg-white px-2 py-3"
        >
            <section
            className="mb-4"
            >
                <section
                className="flex justify-between items-center border-b-2"
                >
                    <input
                    className={"bg-inherit w-[90%] text-4xl" + " " + (editing && "border")}
                    name="title"
                    id="title"
                    value={postData.title}
                    onChange={handleChange}
                    disabled={!editing}
                    />
                    <section
                    className="w-[10%] flex items-center justify-around"
                    >
                        {editing && <button onClick={handleSave} ><FaSave/></button>}
                        <button className="block" onClick={handleToggleEdit}>
                            {!editing ?
                            <FaEdit/>
                            :
                            <FaTimes/>
                            }
                        </button>
                    </section>
                </section>
                {timeStamp}
            </section>
            <section>
                <textarea
                className={"resize-none bg-inherit w-full h-[400px]" + " " + (editing && "border")}
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
        <article
        className="w-[98%] max-w-[1250px] mx-auto bg-white px-2 py-3"
        >
            <header
            className="mb-4"
            >
                <h1
                className="text-2xl mx-auto border-b-2"
                >{post.title}</h1>
                {timeStamp}
            </header>
            <div>
                {post.content.split("\n").map(x => (<p className="indent-8">{x}</p>))}
            </div>
        </article>
    )

    return (
        <div
        className="bg-stone-200 min-h-screen"
        >
        {userRole === "viewer" ? normalView : editorView}
        </div>
    )
}

export default BlogPage