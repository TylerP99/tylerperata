import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectOnePost } from "./blogPostSlice";

function BlogPage() {
    const dispatch = useDispatch();

    const {id} = useParams();
    const post = useSelector((state) => selectOnePost(state, id));

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
        <div
        className="bg-[#02041c] py-10 min-h-screen"
        >
            <article
            className="w-[98%] max-w-[1250px] mx-auto bg-white px-2 py-3"
            >
                <header
                className="mb-4"
                >
                    <h1
                    className="text-4xl mx-auto border-b-2"
                    >{post.title}</h1>
                    {timeStamp}
                </header>
                <div className="text-xl" >
                    {post.content.split("\n").map(x => (<p className="indent-8">{x}</p>))}
                </div>
            </article>
        </div>
    )
}

export default BlogPage