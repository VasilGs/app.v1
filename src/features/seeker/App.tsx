import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Use your real seeker pages/components here.
// Keep it small and stable. Do NOT wrap with <BrowserRouter> here.
import SwipeDeck from "./SwipeDeck";               // create this file (you already started)
/// If you already have a seeker profile screen, import it. Otherwise keep a placeholder:
function ProfilePage() {
  return <div style={{ padding: 24 }}>Seeker Profile</div>;
}

export default function SeekerApp() {
  return (
    <Routes>
      {/* Default tab for seekers */}
      <Route path="/" element={<Navigate to="swipe" />} />

      {/* Swipe jobs */}
      <Route path="swipe" element={<SwipeDeck />} />

      {/* Profile (replace with your real component when ready) */}
      <Route path="profile" element={<ProfilePage />} />

      {/* You can add more routes later, e.g.:
          <Route path="saved" element={<SavedJobsPage />} />
      */}
    </Routes>
  );
}
