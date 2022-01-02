import React from "react";

const Card = ({ icon, title,desc }) => {
  return (
    <div className="bg-white shadow-lg px-5 py-12 max-w-[350px] mx-4 rounded-lg space-y-2 my-4">
      <div className="bg-blue-500 w-max p-4 rounded-full text-white text-xl">{icon}</div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className=" text-lg text-gray-500 font-normal">{desc}</p>
    </div>
  );
};

export default Card;
