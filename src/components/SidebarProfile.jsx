import React from "react";
import { Link } from "react-router-dom";
import {
  InfoCircle,
  JournalText,
  People,
  Shield,
  ChevronRight,
} from "react-bootstrap-icons";

const SidebarProfile = () => {
  return (
    <div className="hidden md:block md:col-span-4 md:bg-white md:p-3 md:rounded-md md:h-min md:shadow-md md:mt-6 xl:p-6">
      <div className="md:flex md:gap-3 md:items-center">
        <img src="/profile_img.png" alt="profile images" className="md:w-1/3" />
        <div className="md:flex-1 md:break-all">
          <p className="md:font-bold">Angel Naibaho</p>
          <p className="md:text-xs">angelnaibaho@gmail.com</p>
        </div>
      </div>
      <div className="md:mt-6">
        <p>Akun</p>
        <div>
          <div className="md:flex md:justify-between md:items-center md:border-black md:border-b-2 md:hover:text-midBlue md:hover:border-midBlue">
            <div className="md:flex md:gap-1 md:items-center md:p-3 md:pl-0">
              <People className="text-xl" />
              <Link className="flex-1">Profile</Link>
            </div>
            <ChevronRight className="text-xl" />
          </div>

          <div className="md:flex md:justify-between md:items-center md:border-black md:border-b-2 md:hover:text-midBlue md:hover:border-midBlue">
            <div className="md:flex md:gap-1 md:items-center md:p-3 md:pl-0">
              <JournalText className="text-xl" />
              <Link className="flex-1">Partisipasi</Link>
            </div>
            <ChevronRight className="text-xl" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p>General</p>
        <div>
          <div className="md:flex md:justify-between md:items-center md:border-black md:border-b-2 md:hover:text-midBlue md:hover:border-midBlue">
            <div className="md:flex md:gap-1 md:items-center md:p-3 md:pl-0">
              <Shield className="text-xl" />
              <Link className="flex-1">Keamanan</Link>
            </div>
            <ChevronRight className="text-xl" />
          </div>

          <div className="md:flex md:justify-between md:items-center md:border-black md:border-b-2 md:hover:text-midBlue md:hover:border-midBlue">
            <div className="md:flex md:gap-1 md:items-center md:p-3 md:pl-0">
              <InfoCircle className="text-xl" />
              <Link className="flex-1">Syarat dan Kondisi</Link>
            </div>
            <ChevronRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
