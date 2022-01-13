import React, { useContext } from "react";
import { Link } from "react-router-dom";
import mesh from "../../assets/mesh.png";
import { UserContext } from "../../context/context";
const FooterCard = () => {
  const {formData,setFormData} = useContext(UserContext);
  return (
    <footer className="bg-gradient-to-r from-sky-500 to-green-300 font-clash flex justify-center flex-col py-10 rounded-xl w-11/12 sm:w-11/12 mx-auto my-20">
      <div className="text-4xl sm:text-5xl font-semibold text-white text-center my-4">
        No more boring <br />
        wallet addresses
      </div>
      <div className="flex justify-center items-center my-2">
        <div className="flex border-[3px] border-gray-200 rounded-xl items-center bg-gray-100/25 text-white">
          <p className="text-xl  sm:text-2xl font-semibold py-2 pl-3">gm.link/</p>
          <input
            type="text"
            name="link"
            placeholder="vitalik"
            className="text-xl border-0 pl-1 shadow-none focus:ring-0 outline-0  sm:text-2xl placeholder-gray-500/30 font-semibold  bg-transparent w-32 sm:w-52"
            onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})}
          />
        </div>
      </div>
      <Link to="/getstarted" className="bg-blue-600 hover:bg-blue-500 text-center text-white font-semibold text-lg sm:text-2xl py-3 sm:w-80 w-[14.5rem] rounded-xl mx-auto ">
          Get Started
        </Link>
    </footer>
  );
};

export default FooterCard;
