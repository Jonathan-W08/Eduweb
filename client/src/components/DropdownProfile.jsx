import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownProfile = (props) => {
  return (
    <div className="absolute z-[60] top-full right-5 w-min bg-white rounded-md shadow-md">
      <div className="border-b-2 border-black">
        <div className="flex items-center p-3">
          <div className="w-8">
            <img
              src="/public/Logo_Infinite.png"
              alt="Logo"
              className="w-full"
            />
          </div>
          <div className="ml-3">
            <p>{props.name}</p>
            <p className="text-xs">{props.email}</p>
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
