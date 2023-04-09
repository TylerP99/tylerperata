import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getPosts } from "../features/blogPost/blogPostSlice";

function BlogLayout() {

  return (
    <div className="bg-[#02041c] py-10 pb-40 min-h-screen">
      <section className="max-w-[1250px] w-[96%] mx-auto bg-white min-h-screen px-3">
          <Outlet/>
      </section>
    </div>
  )
}

export default BlogLayout