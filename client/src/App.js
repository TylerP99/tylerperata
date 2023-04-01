import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Freelancing from './pages/Freelancing';
import Blog from './pages/Blog';

import BlogPage from './features/blogPost/BlogPage';
import Layout from './pages/Layout';

//import { selectAllPosts } from './features/blogPost/blogPostSlice';
import AddPostForm from './features/blogPost/AddPostForm';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Landing/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/freelancing' element={<Freelancing/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path="/blog">
            <Route index element={<Blog/>} />
            <Route path=":id" element={<BlogPage/>} />
            <Route path="newPost" element={<AddPostForm/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
