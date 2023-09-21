import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const LoginPage = () => {
  return (
    <div className="flex flex-col w-full h-screen" id="NewRootRoot">
      <div className="bg-[#f8faff] flex flex-row xl:space-x-24 items-center h-full">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default LoginPage;
