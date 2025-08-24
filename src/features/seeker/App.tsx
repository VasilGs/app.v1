// src/features/seeker/App.tsx
import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import your seeker pages/components here
// e.g., Profile, Swipe, Saved, Settings, etc.

function SwipePage() {
  return <div className="p-6">TODO: Swipe deck here</div>;
}

function ProfilePage() {
  return <div className="p-6">TODO: Seeker profile here</div>;
}

export default function SeekerApp() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="swipe" />} />
      <Route path="swipe" element={<SwipePage />} />
      <Route path="profile" element={<ProfilePage />} />
      {/* add more seeker routes as needed */}
    </Routes>
  );
}
