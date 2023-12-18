import React from "react";
import { Link } from "react-router-dom";
import {
  InfoCircle,
  JournalText,
  People,
  Shield,
  ChevronRight,
} from "react-bootstrap-icons";

const SidebarProfile = (props) => {
  return (
    <div className="hidden md:block md:col-span-4 md:bg-white md:p-3 md:rounded-md md:h-min md:shadow-md md:mt-6 xl:p-6">
      <div className="md:flex md:gap-3 md:items-center">
        <img
          src={props.account.profile_img}
          alt="profile images"
          className="md:w-1/3 rounded-full"
        />
        <div className="md:flex-1 md:break-all">
          <p className="md:font-bold">{props.account.name}</p>
          <p className="md:text-xs">{props.account.email}</p>
        </div>
      </div>
      <div className="md:mt-6">
        <p>Akun</p>
        <div>
          <div className="md:flex md:justify-between md:items-center md:border-black md:border-b-2 md:hover:text-midBlue md:hover:border-midBlue">
            <div className="md:flex md:gap-1 md:items-center md:p-3 md:pl-0">
              <People className="text-xl" />
              <Link className="flex-1" to={"/profile"}>
                Profile
              </Link>
            </div>
            <ChevronRight className="text-xl" />
          </div>

          <div className="md:flex md:justify-between md:items-center md:border-black md:border-b-2 md:hover:text-midBlue md:hover:border-midBlue">
            <div className="md:flex md:gap-1 md:items-center md:p-3 md:pl-0">
              <JournalText className="text-xl" />
              <Link className="flex-1" to={"/partisipasi"}>
                Partisipasi
              </Link>
            </div>
            <ChevronRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
