import React from 'react';

import { Link } from "react-router-dom";
import PageHeader from '../components/PageHeader';

function AdminDashboard() {
  return (
    <div>
        <PageHeader text="Dashboard" />
        <section className="flex flex-wrap gap-10 max-w-[98%] mx-auto" >
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-black/20' 
          to="./newProject"
          >Add New Project</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-black/20' 
          to="./projects"
          >Edit/Delete Projects</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-black/20' 
          to="./newPost"
          >Add New Post</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-black/20' 
          to="./posts"
          >Edit/Delete Posts</Link>
          <Link 
          className='border-2 px-5 py-10 text-center w-[48%] hover:bg-black/20' 
          to="./messages"
          >View Messages</Link>
        </section>
    </div>
  )
}

export default AdminDashboard