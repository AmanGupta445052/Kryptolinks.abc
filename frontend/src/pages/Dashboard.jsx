import React from "react";
import DashboardMainNav from "../components/Dashboard/DashboardMainNav";
import Main from "../components/Dashboard/Main";
import SideNav from "../components/Dashboard/SideNav";

const Dashboard = ({children}) => {
  return (
    <div className="flex bg-gray-50">
      <SideNav/>
      <div className="w-full">
        <DashboardMainNav />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;

