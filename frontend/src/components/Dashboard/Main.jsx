import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/profile";
import { totalAmount } from "./helper/totalAmount";
import PaymentDetailCard from "./PaymentDetailCard";
import {ethPriceInINR} from "../utils/ethPriceInINR"
const Main = () => {
  const { setActiveTab, profile } = useContext(ProfileContext);
  const [ethInUSD,setEthInUSD] = useState(0);
  const { pageView, transactions } = profile;
  const currentEthPrice = () => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then((response) => response.json())
      .then((data) => setEthInUSD(data.USD))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setActiveTab("analytics");
    currentEthPrice();
  }, []);
  return (
    <div className="h-screen">
      <div className="flex m-10  flex-col md:space-x-4 md:flex-row font-inter">
        <div className=" rounded-lg px-5 py-5 border-2 bg-blue-500 text-white ">
          <div className="sm:text-2xl">Total Page Views:</div>
          <div className="text-bold  sm:text-3xl font-semibold ">
            {pageView}
          </div>
        </div>
        <div className="rounded-lg px-5 py-5 border-2  bg-indigo-700 text-white shadow-blue-500">
          <div className="sm:text-2xl">Total Payments Received:</div>
          <div className="flex justify-between sm:text-3xl font-semibold">
            <div>{`${transactions ? transactions.length : 0} payments`}</div>
          </div>
        </div>
        <div className="rounded-lg px-5 py-5 border-2  bg-green-500 text-white shadow-blue-500">
          <div className="sm:text-2xl">Total Payments Received:</div>
          <div className="flex justify-between sm:text-3xl font-semibold">
            <div className="pr-5">{`${transactions ? totalAmount(transactions) : 0} ETH`}</div>
            <div>{`₹ ${transactions ? ethPriceInINR(totalAmount(transactions),ethInUSD) : 0}`}</div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <h1 className="text-2xl font-semibold">Payment Details</h1>
        <div className=" h-[1px] bg-gray-600"></div>
        <div>
          <table className="my-2 mb-10">
            <thead className=" text-gray-400 border-b-2">
              <tr>
                <th className="p-5 whitespace-nowrap font-medium">#</th>
                <th className="p-5 whitespace-nowrap font-medium">Address</th>
                <th className="p-5 whitespace-nowrap font-medium">
                  Amount(In ETH)
                </th>
                <th className="p-5 whitespace-nowrap hidden md:table-cell font-medium">
                  Amount(In INR)
                </th>
                <th className="p-5 whitespace-nowrap hidden md:table-cell font-medium">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className=" text-gray-800 font-medium divide-y-2 my-10 font-inter  ">
              <PaymentDetailCard transactions={transactions ? transactions : []} ethInUSD={ethInUSD} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
