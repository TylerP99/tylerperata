import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Freelancing from './pages/Freelancing';
import Blog from './pages/Blog';

import Navigation from './components/Navigation';
import BlogPage from './features/blogPost/BlogPage';

import { selectAllPosts } from './features/blogPost/blogPostSlice';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/freelancing' element={<Freelancing/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path="/blog">
          <Route index element={<Blog/>} />
          <Route path=":id" element={<BlogPage/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
