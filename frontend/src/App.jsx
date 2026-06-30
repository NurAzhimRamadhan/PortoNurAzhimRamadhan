import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import BackgroundFX from './components/BackgroundFX.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import HomePage from './pages/HomePage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <ThemeProvider>
          <HashRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
        <div className="relative min-h-screen text-white selection:bg-accent-3/40">
          <BackgroundFX />
          <ScrollProgress />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
