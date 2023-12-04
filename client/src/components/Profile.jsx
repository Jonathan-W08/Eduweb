import React from "react";
import ProfileSection from "./ProfileSection";
import SidebarProfile from "./SidebarProfile";

const Profile = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-white md:gap-3 md:px-6">
      <SidebarProfile />
      <ProfileSection />
    </div>
  );
};

export default Profile;
