import Footer from "./Footer";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookie from "js-cookie";

const UserLayout = () => {
  const account = useSelector((state) => state.account.account);

  const navigate = useNavigate();

  // Check Status Account
  useEffect(() => {
    if (!Cookie.get("status")) {
      navigate("/login");
    } else if (Cookie.get("status") === "penyelenggara") {
      navigate("/penyelenggara");
    }
  });

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
