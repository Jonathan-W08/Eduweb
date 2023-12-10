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

import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import CryptoJS from "crypto-js";
import axios from "axios";

import { accountActions } from "./store/account-slice";
import { webinarsActions } from "./store/webinar-slice";

export default function App() {
  const dispatch = useDispatch();

  // Webinars Data
  const webinars = useSelector((state) => state.webinars.webinars);
  const changeWebinars = (data) => {
    dispatch(webinarsActions.changeWebinars(data));
  };

  const getWebinars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      const data = await response.data;
      changeWebinars(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Get Webinars
  useEffect(() => {
    getWebinars();
  }, []);

  // Account Data
  const account = useSelector((state) => state.account.account);
  const changeAccount = (data) => {
    dispatch(accountActions.changeAccount(data));
  };

  // Get account from database
  const getAccount = async () => {
    const response = await axios.get("http://localhost:5000/login/check");
    const data = await response.data;
    return data;
  };

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

    if (getCookieId === "" || getCookieStatus === "") {
      // descrypt cookie id
      const cookieDc = CryptoJS.AES.decrypt(getCookieId, "eduweb");
      const cookieDcData = cookieDc.toString(CryptoJS.enc.Utf8);

      // filter account
      getAccount().then((data) => {
        data.forEach((each) => {
          const email = `"${each.email}"`;
          if (email === cookieDcData) {
            // Gather data
            const data = {
              name: each.name,
              email: each.email,
              profile_img: each.profile_img,
            };

            // change account
            changeAccount({
              ...data,
              status: getCookieStatus,
            });
          }
        });
      });
    }
  }, []);

  return (
    <div className="font-sans relative min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login changeAccount={changeAccount} account={account} />}
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
              <Route index element={<Dashboard getWebinars={getWebinars} />} />
              <Route
                path="register-webinar"
                element={<RegisterWebinar getWebinars={getWebinars} />}
              />
              <Route
                path="update-webinar/:id"
                element={<UpdateWebinar getWebinars={getWebinars} />}
              />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
