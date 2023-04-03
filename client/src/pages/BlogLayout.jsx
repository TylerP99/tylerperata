import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div className="bg-[#02041c] py-10 pb-40 min-h-screen">
      <section className="max-w-[1250px] mx-auto bg-white min-h-screen px-3">
          <Outlet/>
      </section>
    </div>
  )
}

export default BlogLayout