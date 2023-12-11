import React from "react";

import { NavLink } from "react-router-dom";

import { HouseDoorFill, Laptop } from "react-bootstrap-icons";

const Sidebar = (props) => {
  return (
    <div
      className={`absolute z-50 overflow-hidden flex flex-col bg-white ${
        props.sidebarOpen ? "w-full" : "w-0"
      } min-h-screen transition-all lg:relative lg:w-72 lg:px-5`}
    >
      <div className="flex items-center p-3 mt-6 break-all">
        <div className="min-w-[3rem] w-12">
          <img src="/public/Logo_Infinite.png" alt="Logo" className="w-full" />
        </div>
        <div className="ml-3 flex-1">
          <p>Infinite Learning</p>
          <p className="text-xs">marketing@infinite.com</p>
        </div>
      </div>

      <div className="flex-1">
        <NavLink to={"/penyelenggara/dashboard"}>
          <div className="flex items-center p-3 cursor-pointer transition-all hover:bg-neutral-200">
            <div className="text-2xl">
              <HouseDoorFill />
            </div>
            <p className="ml-5">Dasbor</p>
          </div>
        </NavLink>
        <NavLink to={"/penyelenggara/dashboard/register-webinar"}>
          <div className="flex items-center p-3 cursor-pointer transition-all hover:bg-neutral-200">
            <div className="text-2xl">
              <Laptop />
            </div>
            <p className="ml-5">Daftar Webinar</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
