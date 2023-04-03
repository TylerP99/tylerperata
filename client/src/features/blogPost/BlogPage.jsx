import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById } from "./blogPostSlice";

function BlogPage() {
    const dispatch = useDispatch();

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
                <Link to={`/blog/edit/${post._id}`} >Edit Post</Link>
                {timeStamp}
            </header>
            <div className="text-xl" >
                {post.content.split("\n").map(x => (<p className="indent-8">{x}</p>))}
            </div>
        </article>
    )
}

export default BlogPage