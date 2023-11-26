import React from "react";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";

const NavbarMobile = (props) => {
  return (
    <div
      className={`absolute z-50 overflow-hidden flex flex-col bg-white ${
        props.navOpen ? "w-full" : "w-0"
      } min-h-screen left-0 top-full transition-all md:hidden`}
    >
      <div className="p-6 md:flex md:items-center md:w-full">
        <Searchbar />
        <ul className="mt-6 md:mt-0 md:flex md:items-center md:flex-1">
          <li>
            <NavLink className="block w-full p-3">Beranda</NavLink>
          </li>
          <li>
            <NavLink className="block w-full p-3">Partisipasi</NavLink>
          </li>
          <li>
            <NavLink className="block w-full p-3">Tentang Kami</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
