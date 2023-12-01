import React from "react";

const ProfileSection = () => {
  return (
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
  );
};

export default ProfileSection;
