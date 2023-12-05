import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import NavbarTwo from "./NavbarTwo";
import RegisterWebinar from "./RegisterWebinar";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PenyelenggaraLayout = (props) => {
  const account = useSelector((props) => props.account);

  const navigate = useNavigate();

  // Control Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const controlSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Check Status Account
  useEffect(() => {
    if (!props.account.status) {
      navigate("/login");
    } else if (props.account.status !== "penyelenggara") {
      navigate("/");
    }
  });

  return (
    <div>
      <NavbarTwo controlSidebarOpen={controlSidebarOpen} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PenyelenggaraLayout;
