import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavbarTwo from "./NavbarTwo";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const account = () => {
  const account = useSelector((state) => state.account.account);

  const navigate = useNavigate();

  // Control Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const controlSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Check Status Account
  useEffect(() => {
    if (!account.status) {
      navigate("/login");
    } else if (account.status === "user") {
      navigate("/");
    }
  });

  return (
    <>
      <NavbarTwo controlSidebarOpen={controlSidebarOpen} />

      <Outlet context={{ sidebarOpen }} />

      <Footer />
    </>
  );
};

export default account;
