import React from "react";
import LeftSidePanel from "./components/LeftSidePanel";
import NavBar from "./components/NavBar";
import TotalRevenues from "./components/TotalRevenues";
import TotalTransactions from "./components/TotalTransactions";
import TotalLikes from "./components/TotalLikes";
import TotalUsers from "./components/TotalUsers";
import Activities from "./components/Activities";
import TopProducts from "./components/TopProducts";
import AddProfile from "./components/AddProfile";

const Dashboard = () => {
  return (
    <div
      className="overflow-hidden bg-[#f8faff] flex flex-row justify-center gap-16 w-full items-center"
      id="DashboardRoot"
    >
      <LeftSidePanel />
      <div className="flex flex-col gap-8 w-[1004px]">
        <NavBar />
        <div className="flex flex-row justify-between items-start mb-1 mx-px">
          <TotalRevenues />
          <TotalTransactions />
          <TotalLikes />
          <TotalUsers />
        </div>
        <Activities />
        <div className="flex flex-row gap-8 items-start">
          <TopProducts />
          <AddProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
