import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const LoginPage = () => {
  return (
    <div className="flex flex-col w-full" id="NewRootRoot">
      <div className="bg-[#f8faff] flex flex-row gap-24 items-center">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default LoginPage;
