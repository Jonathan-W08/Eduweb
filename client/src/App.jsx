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
import UpdateWebinar from "./components/UpdateWebinar";
import Navpartisipasi from "./components/Navpartisipasi";

import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import CryptoJS from "crypto-js";
import axios from "axios";

import { changeAccount, fetchAccount } from "./store/account-slice";
import { changeWebinars, fetchWebinars } from "./store/webinar-slice";

export default function App() {
  const dispatch = useDispatch();

  // Reser Account
  const [resetAccount, setResetAccount] = useState(false);

  const changeResetAccount = () => {
    setResetAccount((prev) => !prev);
  };

  // Get Webinars
  useEffect(() => {
    dispatch(fetchWebinars());
  }, []);

  useEffect(() => {
    // get cookie id
    const getCookieId = Cookie.get("id");

    // get cookie status
    const getCookieStatus = Cookie.get("status");

    // If not exist
    if (getCookieId === undefined) {
      Cookie.set("id", "");
    }

    if (getCookieStatus === undefined) {
      Cookie.set("status", "");
    }

    if (getCookieId && getCookieStatus) {
      // descrypt cookie id
      const cookieDc = CryptoJS.AES.decrypt(getCookieId, "eduweb");
      const cookieDcData = cookieDc.toString(CryptoJS.enc.Utf8);

      // filter account
      fetchAccount().then((data) => {
        data.forEach((each) => {
          const email = `"${each.email}"`;
          if (email === cookieDcData) {
            // Gather data
            const data = {
              id: each.id,
              name: each.name,
              email: each.email,
              profile_img: each.profile_img,
            };

            // change account
            dispatch(
              changeAccount({
                ...data,
                status: getCookieStatus,
              })
            );
          }
        });
      });
    }
  }, [resetAccount]);

  return (
    <div className="font-sans relative min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                changeAccount={(data) => dispatch(changeAccount(data))}
                changeResetAccount={changeResetAccount}
              />
            }
          />

          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="tentangkami" element={<TentangKami />} />
            <Route path="partsipasi" element={<Partsipasi />} />
            <Route path="webinar" element={<Webinar />} />
            <Route path="navpartisipasi" element={<Navpartisipasi />} />
          </Route>

          <Route path="/penyelenggara" element={<PenyelenggaraLayout />}>
            <Route index element={<Homepage />} />
            <Route path="dashboard" element={<PeyelenggaraSidebarLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="register-webinar" element={<RegisterWebinar />} />
              <Route path="update-webinar/:id" element={<UpdateWebinar />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
