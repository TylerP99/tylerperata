import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";

function AdminPostsList() {

  const posts = useSelector(selectAllPosts);

  if(!posts) {
      return <h2>No Posts</h2>
  }

  return (
    <div>
        <h2>Posts</h2>
        <Link to={"/admin/newPost"}>Add New Post</Link>
        <section>
            {posts.map(x => (
                <article className="border p-5" key={x._id}>
                    <h3>{x.title}</h3>
                    <p>{x.content.slice(0, 50) + (x.content.length >= 50 ? "..." : "")}</p>
                    <section className="flex gap-2">
                        <Link to={`/admin/editPost/${x._id}`}>Edit</Link>
                    </section>
                </article>
            ))}
        </section>
    </div>
  )
}

export default AdminPostsList