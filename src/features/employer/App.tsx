// src/features/employer/App.tsx
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function EmployerApp() {
  return (
    <Routes>
      <Route path="/" element={
        <div style={{ padding: 24 }}>
          <h1>Employer area (temporarily parked)</h1>
          <p>Focusing on Job Seekers MVP today.</p>
        </div>
      }/>
    </Routes>
  );
}
