import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import ClickSpark from './components/ClickSpark';
import './App.css';

const Home = lazy(() => import('./pages/home/Home'));
const ProjectsLayout = lazy(() => import('./pages/projects/ProjectsLayout'));
const UsesLayout = lazy(() => import('./pages/uses/UsesLayout'));
const AnalyticsLayout = lazy(() => import('./pages/analytics/AnalyticsLayout'));
const InterviewLayout = lazy(() => import('./pages/interview/InterviewLayout'));
const PageNotFound = lazy(() => import('./pages/notFound/PageNotFound'));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ClickSpark>
        <div className="app-container">
          <Navbar />
          <main className="page-content">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<ProjectsLayout />} />
                <Route path="/uses" element={<UsesLayout />} />
                <Route path="/analytics" element={<AnalyticsLayout />} />
                <Route path="/interview" element={<InterviewLayout />} />
                <Route path="/interview/:topic" element={<InterviewLayout />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ClickSpark>
    </BrowserRouter>
  );
};

export default App;
