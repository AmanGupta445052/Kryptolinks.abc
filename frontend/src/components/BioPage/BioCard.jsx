import React, { useEffect, useState } from "react";
import { testUser } from "../../testData";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import {SiEthereum} from "react-icons/si"
import ethPriceInINR from "../utils/ethPriceInINR";
const BioCard = () => {
  const { name, desc, pfpImgLink, walletAddress, github, twitter } = testUser;
  const [ethPriceInUSD,setEthPriceInUSD] = useState(0);
  const [amount,setAmount] = useState(0)
  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
    .then(response => response.json())
    .then(data =>  {
        setEthPriceInUSD(data.USD)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div className="bg-white shadow-2xl rounded-lg px-[36px] py-10 my-4 w-10/12">
      <div className="">
        <img className=" w-20  rounded-md" src={pfpImgLink} alt="" />
      </div>
      <div className="flex text-xl text-gray-400 py-2 space-x-1">
        <a href={twitter}>
          <AiOutlineTwitter />
        </a>
        <a href={github}>
          <AiOutlineGithub />
        </a>
      </div>
      <h1 className="text-xl font-semibold text-black/80">{name}</h1>
      <p className="text-sm font-semibold text-black/40">{desc}</p>
      <div className="flex my-4">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 font-medium">
          ETH <SiEthereum className="text-xl" />
        </span>
        <input
          type="text"
          name="pfpLink"
          autoComplete="off"
          className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
        />
      </div>
      <div className="flex">
          <div>{ethPriceInINR(amount,ethPriceInINR)}</div>
          <div>1 ETH = ${ethPriceInUSD}</div>
      </div>
      <div  className="bg-blue-600 hover:bg-blue-500 text-center text-white font-bold text-lg  py-3  rounded-lg mx-auto ">
          Pay Now
        </div>
    </div>
  );
};

export default BioCard;
