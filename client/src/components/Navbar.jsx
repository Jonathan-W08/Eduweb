import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

import { ChevronDown, List } from "react-bootstrap-icons";
import DropdownProfile from "./DropdownProfile";
import NavbarMobile from "./NavbarMobile";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Account Data
  const account = useSelector((props) => props.account.account);

  const [dropdownProfileOpen, setDropdownProfileOpen] = useState(false);

  const controlDropdownProfileOpen = () => {
    setDropdownProfileOpen((prev) => !prev);
  };

  const [navOpen, setNavOpen] = useState(false);

  const controlNavOpen = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex justify-between items-center bg-white p-3 shadow-md md:justify-start xl:px-9">
      <Link to={"/"} className="hidden md:block">
        <div className="flex items-center xs:basis-2card sm:basis-3card">
          <img className="w-9" src="/public/Logo_Eduweb.png" alt="logo" />
          <h1 className="font-semibold ml-2 xl:text-lg">EDUWEB</h1>
        </div>
      </Link>

      <div className="p-2 cursor-pointer md:hidden" onClick={controlNavOpen}>
        <List className="text-3xl" />
      </div>

      <div
        className={`hidden bg-white transition-all md:block md:px-5 md:grow`}
      >
        <div className="p-6 md:flex md:items-center md:w-full">
          <Searchbar />
          <ul className="mt-6 md:mt-0 md:flex md:items-center md:flex-1 md:text-center">
            <li className="grow">
              <NavLink className="block w-full p-3" to={"homepage/"}>
                Beranda
              </NavLink>
            </li>
            <li className="grow">
              <NavLink className="block w-full p-3" to={"/navpartisipasi"}>
                Partisipasi
              </NavLink>
            </li>
            <li className="grow">
              <NavLink className="block w-full p-3" to={"/tentangkami"}>
                Tentang Kami
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <NavbarMobile navOpen={navOpen} />

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
            { name: "Profil", route: "/profile" },
            { name: "Partisipasi", route: "/partisipasi" },
          ]}
        />
      )}
    </nav>
  );
};

export default Navbar;
