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
import TentangKami from "./components/Tentangkami";
import Partsipasi from "./components/Partsipasi";
import Webinar from "./components/Webinar";

import { useSelector, useDispatch } from "react-redux";

import { accountActions } from "./store/account-slice";
import ConfirmBox from "./components/ConfirmBox";

export default function App() {
  // Account Data
  const account = useSelector((state) => state.account.account);
  const dispatch = useDispatch();
  const changeAccount = (data) => {
    dispatch(accountActions.changeAccount(data));
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
            <Route path="homepage" element={<Homepage />} />
            <Route path="tentangkami" element={<TentangKami />} />
            <Route path="partsipasi" element={<Partsipasi />} />
            <Route path="webinar" element={<Webinar />} />
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
