import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Keep these two lazy imports only.
// Seeker is the part you're finishing now.
// Employer stays as a tiny stub while its real screens are parked.
const SeekerApp   = React.lazy(() => import("./features/seeker/App"));
const EmployerApp = React.lazy(() => import("./features/employer/App"));
// If/when you add a verify page, uncomment the next line:
// const Verify      = React.lazy(() => import("./pages/Verify"));

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Routes>
          {/* Default → seeker */}
          <Route path="/" element={<Navigate to="/seeker" />} />

          {/* Seeker area */}
          <Route path="/seeker/*" element={<SeekerApp />} />

          {/* Employer area (stub while parked) */}
          <Route path="/employer/*" element={<EmployerApp />} />

          {/* Optional verify route – add later when ready */}
          {/* <Route path="/verify" element={<Verify />} /> */}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
