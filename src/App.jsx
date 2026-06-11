import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile/ProfilePage";
import CreateRoommateAdPage from "./pages/Roommate/CreateRoommatePage";
import CreatePropertyPage from "./pages/Property/CreatePropertyPage";
import MyRoomsPage from "./pages/MyRoomsPage/MyRoomsPage";
import FavoriteRoomsPage from "./pages/FavoriteRoomsPage/FavoriteRoomsPage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-roommate-ad" element={<CreateRoommateAdPage />} />
        <Route path="/create-property" element={<CreatePropertyPage />} />
        <Route path="/my-rooms" element={<MyRoomsPage />} />
        <Route path="/favorite-rooms" element={<FavoriteRoomsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;