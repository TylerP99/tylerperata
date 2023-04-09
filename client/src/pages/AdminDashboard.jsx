import React from 'react';

import { Link } from "react-router-dom";
import PageHeader from '../components/PageHeader';

function AdminDashboard() {
  return (
    <div>
        <PageHeader text="Dashboard" />
        <Link to="./messages">View Messages</Link>
    </div>
  )
}

export default AdminDashboard