import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Entrance/Login";
import SignUp from "./pages/Entrance/SignUp";
import Profile from "./pages/Profile/ProfilePage";
import CreateRoommateAdPage from "./pages/Roommate/CreateRoommatePage";
import CreatePropertyPage from "./pages/Property/CreatePropertyPage";
import MyRoomsPage from "./pages/Profile/MyRoomsPage/MyRoomsPage";
import FavoriteRoomsPage from "./pages/Profile/FavoriteRoomsPage/FavoriteRoomsPage";
import ArchivePage from "./pages/Profile/ArchivePage/ArchivePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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