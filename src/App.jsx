import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NavbarTwo from "./components/NavbarTwo";
import NotFound from "./components/NotFound";
import PenyelenggaraLayout from "./components/PeyelenggaraLayout";
import Profile from "./components/Profile";
import RegisterWebinar from "./components/RegisterWebinar";
import UserLayout from "./components/UserLayout";
import Partsipasi from "./components/Partsipasi";
import Webinar from "./components/Webinar";
import Tentangkami from "./Tentangkami";

export default function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="tentangkami" element={<Tentangkami />} />
            <Route path="partsipasi" element={<Partsipasi />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="webinar" element={<Webinar />} />
          </Route>

          <Route path="/penyelenggara" element={<PenyelenggaraLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="register-webinar" element={<RegisterWebinar />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
