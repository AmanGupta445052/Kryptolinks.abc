import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserContext } from "../../context/context";
import { addressShortener } from "../utils/addressShortener";
const NavBar = () => {
  const {connectWallet,formData} = useContext(UserContext);
  const {walletAddress} = formData;
  return (
    <div className="flex bg-white shadow-md py-4 px-6 flex-col sm:flex-row justify-between">
      <Link to="/" className="">
        <img src={logo} alt={logo} />
      </Link>
      <div className="flex space-y-2 sm:space-y-0 sm:space-x-4  items-start sm:items-center flex-col sm:flex-row">
        <Link
          to={"/"}
          className="text-xl text-gray-400 font-normal hover:text-blue-600"
        >
          Discord
        </Link>
        <Link
          to={"/"}
          className="text-xl text-gray-400 font-normal hover:text-blue-600"
        >
          FAQ
        </Link>

        {!walletAddress ? <div onClick={connectWallet} className="text-xl text-gray-400 font-medium border-2 py-[0.5rem] px-[1rem] border-gray-400 rounded-full hover:text-white hover:bg-blue-600">
          <p>Connect Wallet</p>
        </div> : <div onClick={connectWallet} className="cursor-pointer text-xl text-gray-400 font-medium border-2 py-[0.5rem] px-[1rem] border-gray-400 rounded-full">
          <p>{addressShortener(walletAddress)}</p>
        </div> }
      </div>
    </div>
  );
};

export default NavBar;
