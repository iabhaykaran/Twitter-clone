import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotificationPage from "../pages/NotificationPage";
import Explore from "../pages/Explore";
import MessagesPage from "../pages/MessagesPage";
import Grok from "../pages/Grok";
import Profile from "../pages/Profile-page";
import Usersuggest from "../components/UserSuggest";
import Following from "../components/following";
import Notfound from "../pages/Notfound";
import PostDetails from "../pages/PostDetails";

export default function Routepage() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/messages" element={<Usersuggest />} />
        <Route path="/following" element={<Following />} />
        <Route path="/post/:id" element={<PostDetails/>} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/grok" element={<Grok />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
