import React, { useState } from "react";

import { ChevronDown, List } from "react-bootstrap-icons";
import DropdownProfile from "./DropdownProfile";

const NavbarTwo = (props) => {
  const [dropdownProfileOpen, setDropdownProfileOpen] = useState(false);

  const controlDropdownProfileOpen = () => {
    setDropdownProfileOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex justify-between items-center bg-white p-3 shadow-md">
      <div className="hidden items-center xs:basis-2card md:flex sm:basis-3card">
        <img className="w-9" src="/public/Logo_Eduweb.png" alt="logo" />
        <h1 className="font-semibold ml-2 xl:text-lg">EDUWEB</h1>
      </div>

      <div className="p-2 cursor-pointer" onClick={props.controlSidebarOpen}>
        <List className="text-3xl md:hidden" />
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
