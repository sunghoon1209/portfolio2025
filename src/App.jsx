import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Project from './pages/Project';
import Detail from './pages/Detail';
import GlobalStyle from './styles/GlobalStyle.js';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <GlobalStyle  isDarkMode={isDarkMode}/>
      <Routes>
        <Route path="/" element={<Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} >
          <Route index element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}  />
          <Route path="project" element={<Project isDarkMode={isDarkMode} />} />
          <Route path="project/detail/:id" element={<Detail />} />      
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;