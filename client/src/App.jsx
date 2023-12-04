import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PeyelenggaraSidebarLayout from "./components/PeyelenggaraSidebarLayout";
import PenyelenggaraLayout from "./components/PeyelenggaraLayout";
import Profile from "./components/Profile";
import RegisterWebinar from "./components/RegisterWebinar";
import UserLayout from "./components/UserLayout";
import { useEffect, useState } from "react";

export default function App() {
  // const navigate = useNavigate();

  // Account temp
  const [account, setAccount] = useState({
    name: "",
    email: "",
    profile_img: "",
    status: "",
  });

  console.log(account);

  const changeAccount = (data) => {
    setAccount(data);
  };

  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login changeAccount={changeAccount} />}
          />

          <Route path="/" element={<UserLayout account={account} />}>
            <Route index element={<Homepage />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route
            path="/penyelenggara"
            element={<PenyelenggaraLayout account={account} />}
          >
            <Route index element={<Homepage />} />
            <Route path="dashboard" element={<PeyelenggaraSidebarLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="register-webinar" element={<RegisterWebinar />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
