import React from "react";

const DashboardMainNav = () => {
  return (
    <div className="bg-white  py-4 px-5 shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src="https://pbs.twimg.com/profile_images/1454755788551954438/lLRzvLSz_400x400.jpg" alt="" className="w-10 rounded-full"/>
        <div className="text-xl font-medium text-slate-900">Nikhil George</div>
      </div>
      <div className="border-2 px-6 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white">0x85...d1EF</div>
    </div>
  );
};

export default DashboardMainNav;
