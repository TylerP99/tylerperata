import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPage from './features/post/BlogPage';
import Layout from './pages/Layout';
import AddPostForm from './features/post/AddPostForm';
import EditPostPage from './features/post/EditPostPage';
import GenericLayout from './pages/GenericLayout';
import LoadPosts from './features/post/LoadPosts';
import MessagePage from './features/message/MessagePage';
import CheckAdmin from './features/auth/CheckAdmin';
import AddProjectForm from './features/project/AddProjectForm';
import UpdateProjectForm from "./features/project/UpdateProjectForm";
import ProjectList from './features/project/ProjectList';
import AdminDashboard from './pages/AdminDashboard';
import LoadProjects from "./features/project/LoadProjects";
import AdminLogin from './features/auth/AdminLogin';
import AdminRegister from "./features/auth/AdminRegister";
import AdminPostsList from './features/post/AdminPostsList';
import PersistLogin from './features/auth/PersistLogin';

import { projectApiSlice } from "./features/project/projectSlice";
projectApiSlice.endpoints.getProjects.initiate();

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
            <Route path="/blog" element={<LoadPosts/>} >
              <Route index element={<Blog/>} />
              <Route path=":id" element={<BlogPage/>} />
              
            </Route>
            <Route path="/admin">
              <Route path="register" element={<AdminRegister/>} />
              <Route path="login" element={<AdminLogin/>} />
              <Route element={<PersistLogin/>}>
                <Route element={<CheckAdmin/>}>
                  <Route index element={<AdminDashboard/>} />
                  <Route path="messages" element={<MessagePage/>} />
                  <Route path="projects" element={<ProjectList/>} />
                  <Route path="newProject" element={<AddProjectForm/>} />
                  <Route path="editProject/:id" element={<UpdateProjectForm/>} />
                  <Route path="posts" element={<AdminPostsList/>} />
                  <Route path="newPost" element={<AddPostForm/>} />
                  <Route path="editPost/:id" element={<EditPostPage/>} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
