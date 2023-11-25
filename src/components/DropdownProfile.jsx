import React, { useState } from "react";

const DropdownProfile = () => {
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
            <p>Penyelenggara</p>
            <p className="text-xs">penyelenggara@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className="p-3 cursor-pointer">Akun</p>
        <p className="p-3 cursor-pointer">Logout</p>
      </div>
    </div>
  );
};

export default DropdownProfile;
