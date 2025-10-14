import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Configuration from './pages/Configuration';
import Monitoring from './pages/Monitoring';
import Settings from './pages/Settings';
import Features from './pages/Features';
import Layout from './components/Layout';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="settings" element={<Settings />} />
          <Route path="features" element={<Features />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}