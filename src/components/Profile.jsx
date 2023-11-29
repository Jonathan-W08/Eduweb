import React from "react";
import { Link } from "react-router-dom";
import {
  InfoCircle,
  JournalText,
  People,
  Shield,
  ChevronRight,
} from "react-bootstrap-icons";

const Profile = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-white md:gap-3 md:px-6">
      <div className="hidden md:block md:col-span-4 md:bg-white md:p-3 md:rounded-md md:h-min md:shadow-md md:mt-6 xl:p-6">
        <div className="md:flex md:gap-3 md:items-center">
          <img
            src="/profile_img.png"
            alt="profile images"
            className="md:w-1/3"
          />
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

      <div className="flex flex-col items-center col-span-12 bg-white p-6 rounded-md md:items-stretch md:col-span-8 md:p-0 md:mt-6 md:h-min md:shadow-md md:pb-6">
        <div className="hidden md:block md:h-32">
          <img
            src="/img/banner.png"
            alt="banner profile"
            className="md:h-full md:w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row md:px-12 md:pt-3 md:gap-3 md:justify-between">
          <div className="xs:w-1/2 md:flex md:w-2/3 md:gap-3 md:items-center">
            <img
              src="/profile_img.png"
              alt="profile image"
              className="w-full md:w-1/5"
            />
            <p className="font-bold mt-3 text-center">
              Anna Vita Angelina Naibaho
            </p>
          </div>
          <button className="bg-midBlue px-4 py-1 rounded-md mt-1">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col w-2/3 mt-6 md:w-full md:px-12">
          <div className="md:flex items-center justify-between">
            <div>
              <p className="text-xs">Display Name</p>
              <p className="font-bold break-all">Anna Vita Angelina Naibaho</p>
            </div>
            <div>
              <button className="bg-midBlue px-4 py-1 rounded-md mt-1">
                Edit
              </button>
            </div>
          </div>

          <div className="mt-6 md:flex items-center justify-between">
            <div>
              <p className="text-xs">Username</p>
              <p className="font-bold break-all">angelnaibaho</p>
            </div>
            <div>
              <button className="bg-midBlue px-4 py-1 rounded-md mt-1">
                Edit
              </button>
            </div>
          </div>

          <div className="mt-6 md:flex items-center justify-between">
            <div>
              <p className="text-xs">Email</p>
              <p className="font-bold break-all">angelnaibaho@gmail.com</p>
            </div>
            <div>
              <button className="bg-midBlue px-4 py-1 rounded-md mt-1">
                Edit
              </button>
            </div>
          </div>

          <div className="mt-6 md:flex items-center justify-between">
            <div>
              <p className="text-xs">Phone Number</p>
              <p className="font-bold break-all">14045</p>
            </div>
            <div>
              <button className="bg-midBlue px-4 py-1 rounded-md mt-1">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
