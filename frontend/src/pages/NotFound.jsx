import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import Image404 from "../assets/404.svg";
const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="text-center  mx-auto mt-10 ">
          <h1 className="text-2xl font-semibold md:text-4xl  mx-5">
            Look like nobody hasn't taken this link.{" "} <br />
            <Link to="/" className="text-blue-700 underline">
              Wanna steal it?
            </Link>
          </h1>
        </div>
        <div className="m-auto md:w-[70%]">
          <img src={Image404} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
