import React from "react";
import { SiEthereum } from "react-icons/si";

const PaymentDetailCard = ({}) => {
  return (
    <tr className="bg-white rounded-lg text-sm">
      <td className="px-5 sm:px-10 py-5  whitespace-nowrap">1</td>
      <td className="px-5 sm:px-10 py-5  whitespace-nowrap">0x32a...3fa</td>
      <td className="px-5 sm:px-10 py-5  whitespace-nowrap flex items-center">2.2 <SiEthereum className="text-lg" /></td>
      <td className="px-5 sm:px-10 py-5  whitespace-nowrap text-green-500 hidden md:table-cell">₹3,10,100</td>
      <td className="px-5 sm:px-10 py-5  whitespace-nowrap hidden md:table-cell">{Date().slice(0, 21)}</td>
    </tr>
  );
};

export default PaymentDetailCard;
