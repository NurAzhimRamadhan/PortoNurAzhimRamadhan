import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import BackgroundFX from './components/BackgroundFX.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import HomePage from './pages/HomePage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <div className="relative min-h-screen text-white selection:bg-accent-3/40">
          <BackgroundFX />
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
