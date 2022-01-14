import React, { useContext, useEffect, useState } from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { ProfileContext } from "../../context/profile";
import {useNavigate} from "react-router-dom"
const EditProfile = () => {
  const navigate = useNavigate();
  const { setActiveTab, profile } = useContext(ProfileContext);
  useEffect(() => {
    setActiveTab("edit");
    setProfileDetails({
      name: profile.name,
      desc: profile.description,
      pfpLink: profile.pfpLink,
      github: profile.githubLink,
      twitter: profile.twitterLink,
      walletAddress: profile.walletAddress,
    });
  }, [profile]);
  const [profileDetails, setProfileDetails] = useState({});
  const { pfpLink, twitter, github, name, desc,walletAddress } = profileDetails;
  const isFormFullyFilled = pfpLink && twitter && github && name && desc;

  const editProfile = () => {
    fetch("http://localhost:8000/api/user/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pfpLink,
        twitter,
        github,
        name,
        desc,
        walletAddress
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error){
          navigate(`/${profile.linkAddress}`)
        }
      })
      .catch((err) => console.log(err));
  };
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
                value={name || " "}
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
                value={desc || " "}
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
              <input
                type="text"
                name="pfpLink"
                value={pfpLink || " "}
                onChange={changeHandler}
                className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
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
                value={github || " "}
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
                value={twitter || " "}
                onChange={changeHandler}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
          </div>
        </div>
        <div
          onClick={editProfile}
          to="/"
          aria-disabled
          className={`${
            isFormFullyFilled
              ? "bg-blue-600 hover:bg-blue-500 "
              : "cursor-not-allowed bg-gray-300 pointer-events-none "
          }text-center text-md text-white font-semibold p-3 w-full inline-block   mt-6`}
        >
          Update Profile
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
