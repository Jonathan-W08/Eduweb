import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ChevronDown, List } from "react-bootstrap-icons";
import DropdownProfile from "./DropdownProfile";
import { useSelector } from "react-redux";

const NavbarTwo = (props) => {
  // Account data
  const account = useSelector((props) => props.account.account);

  const [dropdownProfileOpen, setDropdownProfileOpen] = useState(false);

  const controlDropdownProfileOpen = () => {
    setDropdownProfileOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex justify-between items-center bg-white p-3 shadow-md xl:px-9">
      <NavLink to={"/penyelenggara"} className="hidden md:block">
        <div className="flex items-center xs:basis-2card sm:basis-3card">
          <img className="w-9" src="/public/Logo_Eduweb.png" alt="logo" />
          <h1 className="font-semibold ml-2 xl:text-lg">EDUWEB</h1>
        </div>
      </NavLink>

      <div
        className="p-2 cursor-pointer md:hidden"
        onClick={props.controlSidebarOpen}
      >
        <List className="text-3xl" />
      </div>

      <div
        className="relative flex items-center bg-cyan30 p-1 rounded-md cursor-pointer"
        onClick={controlDropdownProfileOpen}
      >
        <div className="w-full">
          <img
            src={account.profile_img}
            alt="Logo"
            className=" w-8 rounded-full"
          />
        </div>

        <div className="ml-1">
          <ChevronDown />
        </div>
      </div>
      {dropdownProfileOpen && (
        <DropdownProfile
          linkList={[
            { name: "Dashboard", route: "/penyelenggara/dashboard" },
            {
              name: "Register",
              route: "/penyelenggara/dashboard/register-webinar",
            },
            { name: "Log Out", route: "/login" },
          ]}
        />
      )}
    </nav>
  );
};

export default NavbarTwo;
