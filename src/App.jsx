import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Entrance/Login";
import SignUp from "./pages/Entrance/SignUp";
import Profile from "./pages/Profile/ProfilePage";
import MyRoomsPage from "./pages/Profile/MyRoomsPage/MyRoomsPage";
import FavoriteRoomsPage from "./pages/Profile/FavoriteRoomsPage/FavoriteRoomsPage";
import ArchivePage from "./pages/Profile/ArchivePage/ArchivePage";
import Chats from "./pages/Chat/ChatPage";
import RequestPage from "./pages/Request/RequestPage";
import RoommateSearchPage from "./pages/RoommateSearch/RoommateSearchPage";
import RoommateDetailPage from "./pages/RoommateSearch/RoommateDetailPage";
import RoomSearchPage from "./pages/RoomSearch/RoomSearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />    
        <Route path="/my-rooms" element={<MyRoomsPage />} />
        <Route path="/favorite-rooms" element={<FavoriteRoomsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/roommate-search" element={<RoommateSearchPage />} />
        <Route path="/roommate-search/:id" element={<RoommateDetailPage />} />
        <Route path="/room-search" element={<RoomSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;