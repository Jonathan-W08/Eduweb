import React, { useState } from "react";
import Dashboard from "./Dashboard";
import NavbarTwo from "./NavbarTwo";
import RegisterWebinar from "./RegisterWebinar";
import Sidebar from "./Sidebar";

const PenyelenggaraLayout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const controlSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  let currentComponent;

  if (props.type === "dashboard") {
    currentComponent = <Dashboard />;
  } else if (props.type === "register-webinar") {
    currentComponent = <RegisterWebinar />;
  }

  return (
    <div>
      <NavbarTwo controlSidebarOpen={controlSidebarOpen} />

      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} />
        {currentComponent}
      </div>
    </div>
  );
};

export default PenyelenggaraLayout;
