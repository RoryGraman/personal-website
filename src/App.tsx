import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FreshLinesPage from './pages/FreshLinesPage';
import FreshLinesTermsPage from './pages/FreshLinesTermsPage';
import FreshLinesPrivacyPage from './pages/FreshLinesPrivacyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fresh-lines" element={<FreshLinesPage />} />
      <Route path="/fresh-lines/terms" element={<FreshLinesTermsPage />} />
      <Route path="/fresh-lines/privacy-policy" element={<FreshLinesPrivacyPage />} />
      {/* The same pages without the hyphen. */}
      <Route path="/freshlines" element={<Navigate to="/fresh-lines" replace />} />
      <Route path="/freshlines/terms" element={<Navigate to="/fresh-lines/terms" replace />} />
      <Route path="/freshlines/privacy-policy" element={<Navigate to="/fresh-lines/privacy-policy" replace />} />
    </Routes>
  );
}

export default App;
