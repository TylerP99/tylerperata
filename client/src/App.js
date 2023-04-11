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
import CheckAdmin from './components/CheckAdmin';
import AddProjectForm from './features/project/AddProjectForm';
import UpdateProjectForm from "./features/project/UpdateProjectForm";
import ProjectList from './features/project/ProjectList';
import AdminDashboard from './pages/AdminDashboard';
import LoadProjects from "./features/project/LoadProjects";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Landing/>} />
          <Route path="" element={<GenericLayout/>} >
            <Route path='/portfolio' element={<LoadProjects/>}>
              <Route index element={<Portfolio/>} />
            </Route>
            <Route path='/resume' element={<Resume/>} />
            <Route path='/freelancing' element={<Freelancing/>} />
            <Route path="/blog" element={<LoadPosts/>} >
              <Route index element={<Blog/>} />
              <Route path=":id" element={<BlogPage/>} />
              
            </Route>
            <Route path="/admin" element={<CheckAdmin/>} >
              <Route index element={<AdminDashboard/>} />
              <Route path="messages" element={<ContactPage/>} />
              <Route path="projects" element={<ProjectList/>} />
              <Route path="newProject" element={<AddProjectForm/>} />
              <Route path="editProject/:id" element={<UpdateProjectForm/>} />
              <Route path="newPost" element={<AddPostForm/>} />
              <Route path="editPost/:id" element={<EditPostPage/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
