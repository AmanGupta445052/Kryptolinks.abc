import React, { useContext, useEffect, useState } from "react";
import { SiSimpleanalytics } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { BsViewList } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { ProfileContext } from "../../context/profile";
import { Link } from "react-router-dom";
const SideNav = () => {
  const { activeTab, setActiveTab, profile,setProfile } = useContext(ProfileContext);
  const slug = "nikhil"
  const getInfo = () => {
    fetch(`http://localhost:8000/api/user/get/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => console.log(err));
  };
  const isActive = (tabName) => {
    if (tabName === activeTab) return "";
    else return "text-gray-500/80 ";
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="w-1/6  bg-white md:px-3 py-5 h-auto border-r-4 hidden md:block">
      <img src={logo} alt="" />
      <div className="py-5">
        <Link
          to="/dashboard/analytics"
          onClick={() => setActiveTab("analytics")}
          className={`${isActive(
            "analytics"
          )} cursor-pointer  flex text-md font-medium pl-2 py-3  items-center space-x-3 `}
        >
          <div>
            <SiSimpleanalytics className="text-md" />
          </div>
          <div>Analytics</div>
        </Link>
        <Link
          to="/dashboard/profile"
          onClick={() => {
            setActiveTab("edit");
          }}
          className={`${isActive(
            "edit"
          )} cursor-pointer flex text-md font-medium pl-2 py-2  items-center space-x-3 `}
        >
          <div>
            <FaUserCircle className="text-xl" />
          </div>
          <div>Edit Profile</div>
        </Link>
        <Link
          to={`/${profile.linkAddress}`}
          className={`text-gray-500/80 cursor-pointer flex text-md font-medium pl-2 py-2  rounded-lg items-center space-x-3 `}
        >
          <div>
            <BsViewList className="text-lg" />
          </div>
          <div>View Your Page</div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
