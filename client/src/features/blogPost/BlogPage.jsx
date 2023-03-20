import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectOnePost } from "./blogPostSlice";

function BlogPage() {
    const dispatch = useDispatch();

    const {id} = useParams();

    const userRole = "viewer"; // viewer, editor

    const post = useSelector((state) => selectOnePost(state, id));

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default BlogPage