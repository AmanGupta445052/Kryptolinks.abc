import React, { useContext, useEffect, useState } from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/profile";

const EditProfile = () => {
    const {setActiveTab} = useContext(ProfileContext);
    useEffect(() => {
        setActiveTab("edit")
      },[])
    const [profileDetails, setProfileDetails] = useState({
        name: "",
        desc: "",
        pfpLink: "",
        github: "",
        twitter: "",
      });
  const { pfpLink, twitter, github, name, desc } =
    profileDetails;
  const isFormFullyFilled =
      pfpLink && twitter && github && name && desc;

  const changeHandler = (e) => {
    setProfileDetails({ ...profileDetails, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" className="w-11/12 sm:w-2/4 mx-auto my-10">
        <h1 className="text-4xl font-bold mb-5">Edit Profile</h1>
        <div className=" h-[1.3px] bg-gray-300"></div>
        <div className=" flex flex-col my-3">
          <div className="mb-4">
            <div className="font-medium text-md pl-2 py-2">Name</div>
            <div className="flex">
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={changeHandler}
                className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="font-medium text-md pl-2 py-2">Description</div>
            <div className="flex">
              <input
                type="text"
                name="desc"
                onChange={changeHandler}
                className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                maxLength="100"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-md font-medium text-gray-900 ">
              Profile Image Link
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 font-medium">
                https://
              </span>
              <input
                type="text"
                name="pfpLink"
                onChange={changeHandler}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="font-medium text-md pl-2 py-2">Social Links</div>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 font-medium">
                <AiFillGithub />
              </span>
              <input
                type="text"
                name="github"
                onChange={changeHandler}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
            <div className="flex mt-4">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 font-medium">
                <AiOutlineTwitter />
              </span>
              <input
                type="text"
                name="twitter"
                onChange={changeHandler}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
          </div>
        </div>
        <Link
          to="/"
          aria-disabled
          className={`${
            isFormFullyFilled
              ? "bg-blue-600 "
              : "cursor-not-allowed bg-gray-300 pointer-events-none "
          }text-center text-md text-white font-bold p-3 w-full inline-block   mt-6`}
        >
          Update Profile
        </Link>
      </form>
    </div>
  );
};

export default EditProfile;
