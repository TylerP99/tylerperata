import React from 'react';

import { Link } from "react-router-dom";
import PageHeader from '../components/PageHeader';

function AdminDashboard() {
  return (
    <div>
        <PageHeader text="Dashboard" />
        <section className="flex flex-col" >
          <Link to="./messages">View Messages</Link>
          <Link to="./newProject">Add New Project</Link>
          <Link to="./projects">Edit/Delete Projects</Link>
          <Link to="./newPost">Add New Post</Link>
          <Link to="./posts">Edit/Delete Posts</Link>
        </section>
    </div>
  )
}

export default AdminDashboard