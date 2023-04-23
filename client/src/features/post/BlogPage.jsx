import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

function BlogPage() {

    const {id} = useParams();
    const post = useSelector((state) => selectPostById(state, id));

    if(!post) {
        return (
            <h1>Post not found.</h1>
        )
    }

    const timeStamp = (
        <section
        className="italic text-sm"
        >
            <p>{`Last updated on ${new Date(post.updatedAt).toLocaleString()}`}</p>
            <p>{`Originally posted on ${new Date(post.createdAt).toLocaleString()}`}</p>
        </section>
    )

    return (
        <article>
            <header
            className="mb-4"
            >
                <h1
                className="text-4xl border-b-black border-b-2 mb-5 p-4"
                >{post.title}</h1>
                {timeStamp}
            </header>
            <div className="text-xl w-[95%] mx-auto" >
                {post.content.split("\n").map(x => (<p className="indent-8">{x}</p>))}
            </div>
        </article>
    )
}

export default BlogPage