import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/context";

const Header = () => {
  const {formData,setFormData} = useContext(UserContext)
  return (
    <header className="flex flex-col justify-center my-12 sm:my-32">
      <h1 className="text-center text-6xl sm:text-8xl font-bold header-gradient ">
        Wallet addresses <br /> simplified.
      </h1>
      <p className=" text-center font-medium sm:text-xl text-md max-w-lg text-gray-400  my-5 mx-auto">No more boring and messy wallet addresses. Create easily shareable links of your address using <span className="text-blue-400 underline">gm.link</span></p>
      <div className="flex justify-center items-center m-3">
        <div className="flex border-[3px] border-blue-600 rounded-l-xl items-center">
          <p className="text-lg  sm:text-3xl font-bold py-3 pl-3">gm.link/</p>
          <input
            type="text"
            name="link"
            placeholder="name"
            className="text-lg placeholder-slate-300  sm:text-3xl font-bold w-28 sm:w-36 outline-transparent bg-transparent border-0 focus:ring-0 pl-0"
            onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})}
          />
        </div>
        <Link to="/getstarted" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-xl py-[1.198rem] px-2 sm:px-3 rounded-r-xl ">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
