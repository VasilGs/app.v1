import { Routes, Route, Navigate } from "react-router-dom";
import SwipeDeck from "./SwipeDeck"; // create/use your swipe deck component
import UserProfileView from "../../components/UserProfileView"; 
import SavedJobsModal from "../../components/SavedJobsModal"; 

export default function SeekerApp() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="swipe" />} />
      <Route path="swipe" element={<SwipeDeck />} />
      <Route path="profile" element={<UserProfileView />} />
      <Route path="saved" element={<SavedJobsModal />} />
    </Routes>
  );
}
