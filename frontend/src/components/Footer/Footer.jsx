import React from "react";
import FooterCard from "./FooterCard";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="my-10">
      <FooterCard />
      <div className="w-11/12 mx-auto text-gray-400/80 text-4xl pl-2 font-clash">
        <div className="flex space-x-3 ">
          <a href="/"><AiOutlineTwitter className="hover:text-gray-400"/></a>
          <a href="https://github.com/thegeorgenikhil/gm.link-app" target="_blank"><AiOutlineGithub className="hover:text-gray-400"/></a>
          <a href="/"><FaDiscord className="hover:text-gray-400"/></a>
        </div>
        <div className="text-lg font-medium my-2">
          © <span>{new Date().getFullYear()}</span> gm.link . All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
