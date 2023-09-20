import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-start mb-px mx-px">
      <div className="text-2xl font-['Montserrat'] font-bold">Dashboard</div>
      <div className="flex flex-row gap-6 items-start">
        <div className="flex flex-row gap-3 w-56 shrink-0 items-start">
          <div
            className="bg-white flex flex-row gap-20 w-48 h-8 items-start pt-1 px-4"
            id="White"
          >
            <div className="text-sm font-['Lato'] text-[#b0b0b0]">
              Search...
            </div>
            <img
              src="./images/search-icon.svg"
              className="mt-1 w-3 shrink-0"
              id="SearchIcon"
            />
          </div>
          <img
            src="./images/notification-icon.svg"
            className="mt-2 w-4 shrink-0"
          />
        </div>
        <img src="./images/profile.png" className="w-8 rounded-full shrink-0" />
      </div>
    </div>
  );
};

export default NavBar;
