import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import NavbarTwo from "./NavbarTwo";
import RegisterWebinar from "./RegisterWebinar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const PenyelenggaraLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const controlSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <NavbarTwo controlSidebarOpen={controlSidebarOpen} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PenyelenggaraLayout;
