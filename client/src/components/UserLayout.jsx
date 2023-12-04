import Footer from "./Footer";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const UserLayout = (props) => {
  const navigate = useNavigate();

  // Check Status Account
  useEffect(() => {
    if (!props.account.status) {
      navigate("/login");
    } else if (props.account.status !== "user") {
      navigate("/penyelenggara");
    }
  });

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
