import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const SeekerApp   = React.lazy(() => import("./features/seeker/App"));
const EmployerApp = React.lazy(() => import("./features/employer/App"));
// (optional) const Verify = React.lazy(() => import("./pages/Verify"));

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/seeker" />} />
          <Route path="/seeker/*" element={<SeekerApp />} />
          <Route path="/employer/*" element={<EmployerApp />} />
          {/* <Route path="/verify" element={<Verify />} /> */}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
