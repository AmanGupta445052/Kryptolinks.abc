import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserContext } from "../../context/context";
import { addressShortener } from "../utils/addressShortener";
import {ImMenu} from "react-icons/im"
const NavBar = () => {
  const { connectWallet, formData } = useContext(UserContext);
  const { walletAddress } = formData;
  const [expand,setExpand] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="flex bg-white shadow-md py-4 px-6 flex-col sm:flex-row justify-between header-gradient-2 font-clash">
      <div className="flex justify-between items-center">
        <Link to="/" className="">
          <img src={logo} alt={logo} />
        </Link>
        <div className="flex sm:hidden" onClick={() => setExpand(!expand)}><ImMenu fontSize={25} className="text-indigo-700"/></div>
      </div>
      <div className={`${expand ||  windowDimensions.width > 640 ? "flex" : "hidden"} space-y-2 sm:space-y-0 sm:space-x-4  items-start sm:items-center flex-col sm:flex-row pt-3 sm:pt-0`}>
        <Link
          to={"/"}
          className="text-xl text-gray-200 font-normal hover:text-white"
        >
          Discord
        </Link>
        <Link
          to={"/"}
          className="text-xl text-gray-200 font-normal hover:text-white"
        >
          FAQ
        </Link>

        {!walletAddress ? (
          <div
            onClick={connectWallet}
            className="text-xl text-gray-200 font-medium border-2 py-[0.5rem] px-[1rem] border-gray-200 rounded-full hover:text-white hover:bg-blue-600/40"
          >
            <p>Connect Wallet</p>
          </div>
        ) : (
          <div
            onClick={connectWallet}
            className="cursor-pointer text-xl text-gray-200 font-medium border-2 py-[0.5rem] px-[1rem] border-gray-200 rounded-full"
          >
            <p>{addressShortener(walletAddress)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
