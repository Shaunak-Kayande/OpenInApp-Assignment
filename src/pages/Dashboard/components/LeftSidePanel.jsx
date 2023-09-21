import React from "react";

const LeftSidePanel = () => {
  return (
    <div
      className="bg-[linear-gradient(180deg,_#4285f4_0%,#3c83f9_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat hidden xl:flex flex-col justify-between h-[140vh] items-start my-10 pl-12 py-16 rounded-[20px]"
      id="LeftSide"
    >
      <div className="flex flex-col mr-20 gap-10 w-[12vw] h-[36vh] shrink-0">
        <div className="text-4xl font-['Montserrat'] font-bold text-white self-start mb-5 ml-px">
          Board.
        </div>
        <div className="flex flex-row gap-5 items-center ml-px mr-3">
          <img
            src="./images/dashboard-icon.svg"
            className="w-4 shrink-0"
            id="Dashboardicon"
          />
          <div className="text-lg font-['Montserrat'] font-bold text-white self-start">
            Dashboard
          </div>
        </div>
        <div className="flex flex-row ml-px gap-5 items-start">
          <img
            src="./images/transaction-icon.svg"
            className="w-4 shrink-0"
            id="Transactionicon"
          />
          <div className="text-lg font-['Montserrat'] text-white">
            Transactions
          </div>
        </div>
        <div className="flex flex-row mr-5 gap-5 items-center">
          <img
            src="./images/schedule-icon.svg"
            className="w-5 shrink-0"
            id="Scheduleicon"
          />
          <div className="text-lg font-['Montserrat'] text-white self-start">
            Schedules
          </div>
        </div>
        <div className="self-start flex flex-row ml-px gap-5 w-20 items-center">
          <img
            src="./images/user-icon.svg"
            className="w-4 shrink-0"
            id="Usericon"
          />
          <div className="text-lg font-['Montserrat'] text-white self-start">
            Users
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center ml-px mr-10">
          <img
            src="./images/setting-icon.svg"
            className="w-4 shrink-0"
            id="Settingicon"
          />
          <div className="text-lg font-['Montserrat'] text-white self-start">
            Settings
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-px gap-5 w-20 h-12 shrink-0 items-start">
        <div className="text-sm font-['Montserrat'] text-white">Help</div>
        <div className="text-sm font-['Montserrat'] text-white">Contact Us</div>
      </div>
    </div>
  );
};

export default LeftSidePanel;
