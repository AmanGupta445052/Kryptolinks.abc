import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/profile";
import { userInfoFetch } from "./helper/userInfoFetch";
import { addressShortener } from "../utils/addressShortener";
const DashboardMainNav = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div className="bg-white  py-4 px-5 shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={profile.pfpLink} alt="" className="w-10 rounded-full" />
        <div className="text-xl font-medium text-slate-900">{profile.name || " "}</div>
      </div>
      <div className="border-2 px-6 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white">
        {addressShortener(profile.walletAddress || " ")}
      </div>
    </div>
  );
};

export default DashboardMainNav;
