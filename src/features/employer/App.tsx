import * as React from "react";
import { Routes, Route } from "react-router-dom";

export default function EmployerApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: 24 }}>
            <h1>Employer area parked</h1>
            <p>We’re finishing the Job Seeker side first.</p>
          </div>
        }
      />
    </Routes>
  );
}
