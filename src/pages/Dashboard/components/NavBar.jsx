import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-px mx-px mt-2">
      <div className="text-2xl font-['Montserrat'] font-bold">Dashboard</div>
      <div className="flex flex-row space-x-6 items-center justify-center ">
        <div className="flex flex-row space-x-3 md:w-56 shrink-0 items-center justify-center ">
          <div
            className="bg-white flex flex-row space-x-20 md:w-48 h-8 items-center  md:px-4"
            id="White"
          >
            <div className="text-sm font-['Lato'] text-[#b0b0b0] hidden md:block">
              Search...
            </div>
            <img
              src="./images/search-icon.svg"
              className=" w-3 shrink-0"
              id="SearchIcon"
            />
          </div>
          <img src="./images/notification-icon.svg" className="w-4 shrink-0" />
        </div>
        <img src="./images/profile.png" className="w-8 rounded-full shrink-0" />
      </div>
    </div>
  );
};

export default NavBar;
