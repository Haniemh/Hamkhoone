import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";

import ArchivePage from "./pages/Profile/ArchivePage/ArchivePage";
import Chats from "./pages/Chat/ChatPage";
import CreatePropertyAd from "./pages/Property/CreatePropertyPage";
import FavoriteRoomsPage from "./pages/Profile/FavoriteRoomsPage/FavoriteRoomsPage";
import Login from "./pages/Entrance/Login";
import MyRoomsPage from "./pages/Profile/MyRoomsPage/MyRoomsPage";
import Profile from "./pages/Profile/ProfilePage";
import RequestPage from "./pages/Request/RequestPage";
import RoomDetails from "./pages/RoomSearch/RoomDetails";
import RoomSearchPage from "./pages/RoomSearch/RoomSearchPage";
import RoommateDetailPage from "./pages/RoommateSearch/RoommateDetailPage";
import RoommateSearchPage from "./pages/RoommateSearch/RoommateSearchPage";
import SignUp from "./pages/Entrance/SignUp";
import { hasAccessToken } from "./lib/api";

function ProtectedRoute({ children }: { children: ReactNode }) {
  if (!hasAccessToken()) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/my-rooms" element={<MyRoomsPage />} />
        <Route path="/favorite-rooms" element={<FavoriteRoomsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/Chats" element={<Navigate to="/chats" replace />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/roommate-search" element={<RoommateSearchPage />} />
        <Route path="/roommate-search/:id" element={<RoommateDetailPage />} />
        <Route path="/room-search" element={<RoomSearchPage />} />
        <Route path="/create-property" element={<CreatePropertyAd />} />
        <Route path="/room-search/:id" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
