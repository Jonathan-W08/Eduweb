import React from "react";
import { useSelector } from "react-redux";
import ProfileSection from "./ProfileSection";
import SidebarProfile from "./SidebarProfile";

const Profile = () => {
  const account = useSelector((props) => props.account.account);

  return (
    <div className="grid grid-cols-12 min-h-screen bg-white md:gap-3 md:px-6">
      <SidebarProfile account={account} />
      <ProfileSection account={account} />
    </div>
  );
};

export default Profile;
