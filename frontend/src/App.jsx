import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Repositories from './pages/Repositories';
import LearningPaths from './pages/LearningPaths';
import Modules from './pages/Modules';
import ProgressTracker from './pages/ProgressTracker';
import MentorSupport from './pages/MentorSupport';
import CodeAnalysis from './pages/CodeAnalysis';
import Documentation from './pages/Documentation';
import Discussions from './pages/Discussions';
import DevOps from './pages/DevOps';

const getPageKey = (pathname) => {
  const pageMap = {
    '/': 'dashboard',
    '/repositories': 'repositories',
    '/learning-paths': 'learning-paths',
    '/modules': 'modules',
    '/progress-tracker': 'progress',
    '/mentor-support': 'mentor',
    '/code-analysis': 'code-analysis',
    '/documentation': 'documentation',
    '/discussions': 'discussions',
    '/devops': 'devops',
  };
  return pageMap[pathname] || 'dashboard';
};

function AppContent() {
  const location = useLocation();
  const currentPage = getPageKey(location.pathname);

  return (
    <MainLayout currentPage={currentPage}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/mentor-support" element={<MentorSupport />} />
        <Route path="/code-analysis" element={<CodeAnalysis />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/devops" element={<DevOps />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
