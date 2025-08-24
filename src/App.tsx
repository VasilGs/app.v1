// src/App.tsx
import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const SeekerApp = React.lazy(() => import('./features/seeker/App'));
const EmployerApp = React.lazy(() => import('./features/employer/App'));
const Verify      = React.lazy(() => import('./pages/Verify')); // create this file later

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/seeker" />} />
          <Route path="/seeker/*" element={<SeekerApp />} />
          <Route path="/employer/*" element={<EmployerApp />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
