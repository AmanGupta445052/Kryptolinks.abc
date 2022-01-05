import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/profile";
import PaymentDetailCard from "./PaymentDetailCard";

const Main = () => {
  const { setActiveTab,setLink } = useContext(ProfileContext);
  useEffect(() => {
    setActiveTab("analytics")
  },[])
  return (
    <div>
      <div className="flex m-10  flex-col md:space-x-4 md:flex-row">
        <div className=" rounded-lg px-5 py-5 border-2 bg-blue-500 text-white ">
          <div className="sm:text-2xl">Total Page Views:</div>
          <div className="text-bold  sm:text-3xl font-semibold ">39 views</div>
        </div>
        <div className="rounded-lg px-5 py-5 border-2  bg-indigo-700 text-white shadow-blue-500">
          <div className="sm:text-2xl">Total Payments Received:</div>
          <div className="flex justify-between sm:text-3xl font-semibold">
            <div>17 payments</div>
          </div>
        </div>
        <div className="rounded-lg px-5 py-5 border-2  bg-green-500 text-white shadow-blue-500">
          <div className="sm:text-2xl">Total Payments Received:</div>
          <div className="flex justify-between sm:text-3xl font-semibold">
            <div>2.2ETH</div>
            <div>₹3,10,000</div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <h1 className="text-2xl font-bold">Payment Details</h1>
        <div className=" h-[1px] bg-gray-600"></div>
        <div>
          <table className="my-2">
            <thead className=" text-gray-400 border-b-2 ">
              <tr>
                <th className="p-5 whitespace-nowrap">#</th>
                <th className="p-5 whitespace-nowrap">Address</th>
                <th className="p-5 whitespace-nowrap">Amount(In ETH)</th>
                <th className="p-5 whitespace-nowrap hidden md:table-cell">
                  Amount(In INR)
                </th>
                <th className="p-5 whitespace-nowrap hidden md:table-cell">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className=" text-gray-800 font-medium divide-y-2 my-10  ">
              <PaymentDetailCard />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
