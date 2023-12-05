import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DropdownProfile = (props) => {
  const account = useSelector((props) => props.account.account);

  return (
    <div className="absolute z-[60] top-full right-5 w-min bg-white rounded-md shadow-md">
      <div className="border-b-2 border-black">
        <div className="flex items-center p-3">
          <div className="w-8">
            <img src={account.profile_img} alt="Logo" className="w-full" />
          </div>
          <div className="ml-3">
            <p>{account.name}</p>
            <p className="text-xs">{account.email}</p>
          </div>
        </div>
      </div>
      <div>
        {props.linkList.map((e, i) => {
          return (
            <Link
              key={i}
              className="block p-3 cursor-pointer hover:bg-neutral-200"
              to={e.route}
            >
              {e.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownProfile;
