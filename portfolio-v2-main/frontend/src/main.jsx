import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Note: StrictMode intentionally double-invokes effects in development.
// We render without StrictMode to avoid visible double-mount artifacts
// (Embla autoplay restarts, useScroll snapshots, etc.) in dev preview.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
