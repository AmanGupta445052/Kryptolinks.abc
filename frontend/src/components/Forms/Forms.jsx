import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { UserContext } from "../../context/context";

const Forms = () => {
  const navigate = useNavigate();
  const { formData, setFormData, checkIfWalletIsConnected, connectWallet } =
    useContext(UserContext);
  const { link, walletAddress, pfpLink, twitter, github, name, desc } =
    formData;
  const isFormFullyFilled =
    link && walletAddress && pfpLink && twitter && github && name && desc;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const createUser = (user) => {};
  const createLink = () => {
    if (isFormFullyFilled) {
      fetch("http://localhost:8000/api/user/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          linkAddress: link,
          walletAddress,
          pfpLink,
          description: desc,
          githubLink: github,
          twitterLink: twitter,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data && !data.error){
            return navigate("/dashboard/home")
          }
          return console.log(data.msg)
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    checkIfWalletIsConnected();
  }, []);
  return (
    <div>
      <form action="" className="w-11/12 sm:w-2/4 mx-auto my-10">
        <h1 className="text-4xl font-bold mb-5">Create your link</h1>
        <div className=" flex flex-col">
          <div className="mb-4">
            <div className="font-medium text-md pl-2 py-2">Link</div>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 font-medium">
                gm.link/
              </span>
              <input
                type="text"
                name="link"
                value={link}
                autoComplete="off"
                onChange={(e) => changeHandler(e)}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              />
            </div>
          </div>
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
            <label className="block mb-2 text-md font-medium text-gray-900">
              Wallet Address
            </label>
            {walletAddress ? (
              <input
                type="text"
                id="disabled-input"
                value={walletAddress}
                onChange={changeHandler}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed font-medium"
                disabled
                readOnly
              />
            ) : (
              <div
                className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 text-center text-md font-bold   p-2.5 w-full rounded-xl"
                onClick={() => connectWallet()}
              >
                Connect Wallet
              </div>
            )}
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
        <div
          onClick={createLink}
          aria-disabled
          className={`${
            isFormFullyFilled
              ? "bg-blue-600 hover:bg-blue-500 "
              : "cursor-not-allowed bg-gray-300 pointer-events-none "
          }text-center text-md text-white font-semibold p-3 w-full inline-block   mt-6`}
        >
          Create Link
        </div>
      </form>
    </div>
  );
};

export default Forms;
