import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Freelancing from './pages/Freelancing';
import Blog from './pages/Blog';

import Navigation from './components/Navigation';

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
      </Routes>
    </Router>
    </>
  );
}

export default App;
