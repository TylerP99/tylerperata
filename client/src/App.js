import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Freelancing from './pages/Freelancing';
import Blog from './pages/Blog';

import BlogPage from './features/blogPost/BlogPage';
import Layout from './pages/Layout';

import AddPostForm from './features/blogPost/AddPostForm';
import EditPostPage from './features/blogPost/EditPostPage';
import GenericLayout from './pages/GenericLayout';
import LoadPosts from './features/blogPost/LoadPosts';
import ContactPage from './features/contact/ContactPage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Landing/>} />
          <Route path="" element={<GenericLayout/>} >
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/freelancing' element={<Freelancing/>} />
            <Route path="/blog" element={<LoadPosts/>} >
              <Route index element={<Blog/>} />
              <Route path=":id" element={<BlogPage/>} />
              <Route path="newPost" element={<AddPostForm/>} />
              <Route path="edit/:id" element={<EditPostPage/>} />
            </Route>
            <Route path="/admin">
              <Route path="messages" element={ContactPage} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
