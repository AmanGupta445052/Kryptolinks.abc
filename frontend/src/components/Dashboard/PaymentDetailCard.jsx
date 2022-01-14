import React from "react";
import { SiEthereum } from "react-icons/si";
import { addressShortener } from "../utils/addressShortener";
import {ethPriceInINR} from "../utils/ethPriceInINR"
const PaymentDetailCard = ({ transactions,ethInUSD}) => {
  console.log(transactions);
  return transactions.reverse().map((item, index) => {
    const {payerAddress,amount,timestamp} = item;
    return (
      <tr className="bg-white rounded-lg text-sm" key={index}>
        <td className="px-5 sm:px-10 py-5  whitespace-nowrap">{transactions.length - index}</td>
        <td className="px-5 sm:px-10 py-5  whitespace-nowrap">{addressShortener(payerAddress || " ")}</td>
        <td className="px-5 sm:px-10 py-5  whitespace-nowrap flex items-center">
          {amount} <SiEthereum className="text-lg" />
        </td>
        <td className="px-5 sm:px-10 py-5  whitespace-nowrap text-green-500 hidden md:table-cell">
          {`₹${ethPriceInINR(amount,ethInUSD)}`}
        </td>
        <td className="px-5 sm:px-10 py-5  whitespace-nowrap hidden md:table-cell">
          {timestamp.slice(0, 21)}
        </td>
      </tr>
    );
  });
};

export default PaymentDetailCard;
