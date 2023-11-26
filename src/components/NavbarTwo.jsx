import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ChevronDown, List } from "react-bootstrap-icons";
import DropdownProfile from "./DropdownProfile";

const NavbarTwo = (props) => {
  const [dropdownProfileOpen, setDropdownProfileOpen] = useState(false);

  const controlDropdownProfileOpen = () => {
    setDropdownProfileOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex justify-between items-center bg-white p-3 shadow-md">
      <Link to={"/penyelenggara/dashboard"} className="hidden md:block">
        <div className="flex items-center xs:basis-2card sm:basis-3card">
          <img className="w-9" src="/public/Logo_Eduweb.png" alt="logo" />
          <h1 className="font-semibold ml-2 xl:text-lg">EDUWEB</h1>
        </div>
      </Link>

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
          <img src="/public/Logo_Infinite.png" alt="Logo" className=" w-8" />
        </div>

        <div className="ml-1">
          <ChevronDown />
        </div>
      </div>
      {dropdownProfileOpen && <DropdownProfile />}
    </nav>
  );
};

export default NavbarTwo;
