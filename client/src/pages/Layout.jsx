import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

import Navigation from '../components/Navigation';

function Layout() {
  return (
    <div className='min-h-[100vh] relative'>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout