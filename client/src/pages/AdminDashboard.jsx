import { Link } from "react-router-dom";

import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import PageHeader from '../components/headers/PageHeader';


function AdminDashboard() {

  const [sendLogout, {isLoading}] = useSendLogoutMutation();

  return (
    <div>
        <PageHeader text="Dashboard" />
        <section className="flex flex-wrap gap-10 max-w-[98%] mx-auto" >
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-white/20' 
          to="./newProject"
          >Add New Project</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-white/20' 
          to="./projects"
          >Edit/Delete Projects</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-white/20' 
          to="./newPost"
          >Add New Post</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-white/20' 
          to="./posts"
          >Edit/Delete Posts</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-white/20' 
          to="./messages"
          >View Messages</Link>
          <button 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-white/20' 
          onClick={sendLogout}
          >{isLoading ? "Logging out..." : "Logout"}</button>
        </section>
    </div>
  )
}

export default AdminDashboard