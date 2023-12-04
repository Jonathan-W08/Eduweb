import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import NavbarTwo from "./NavbarTwo";
import RegisterWebinar from "./RegisterWebinar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const PeyelenggaraSidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} />
      <Outlet />
    </div>
  );
};

export default PeyelenggaraSidebarLayout;
