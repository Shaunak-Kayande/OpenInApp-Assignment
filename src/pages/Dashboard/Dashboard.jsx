import React from "react";
import LeftSidePanel from "./components/LeftSidePanel";
import NavBar from "./components/NavBar";
import TotalRevenues from "./components/TotalRevenues";
import TotalTransactions from "./components/TotalTransactions";
import TotalLikes from "./components/TotalLikes";
import TotalUsers from "./components/TotalUsers";
import Activities from "./components/Activities";
import TopProducts from "./components/TopProducts";
import Profile from "./components/Profile";

const Dashboard = () => {
  return (
    <div
      className="relative overflow-hidden bg-[#f8faff] flex flex-row justify-center gap-16 pb-16 w-full items-center"
      id="DashboardRoot"
    >
      <LeftSidePanel />
      <div className="flex flex-col gap-8 w-[90vw] md:w-[70vw]" id="RightSide">
        <NavBar />
        <div className=" mb-1 mx-px" id="dashboard-center">
          <TotalRevenues />
          <TotalTransactions />
          <TotalLikes />
          <TotalUsers />
        </div>
        <Activities />
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <TopProducts />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
