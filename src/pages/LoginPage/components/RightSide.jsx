import React, { useEffect, useState } from "react";
import { fetchUsersData } from "../../../setup/api/userData";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchUsersData()
      .then((data) => setUsersData(data))
      .catch((error) => console.error(error));
  }, []);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex flex-col md:gap-2 items-center lg:items-start overflow-hidden"
      id="signin"
    >
      <div className="text-2xl md:text-4xl font-['Montserrat'] font-bold">
        Sign In
      </div>
      <div className="text-sm md:text-base font-['Lato'] mb-5">
        Sign in to your account
      </div>
      <div className="flex flex-col md:flex-row mb-2 gap-2 md:mb-4 md:gap-6 w-full sm:w-1/2 md:w-full items-center justify-center md:items-start">
        <div
          className="bg-white flex flex-row items-center justify-center gap-3 w-full md:w-1/2 h-8 px-5"
          id="White"
        >
          <img
            src="./google-icon.svg"
            className="w-4 shrink-0"
            id="Googleicon"
          />
          <div className="text-center text-xs font-['Montserrat'] text-[#858585]">
            Sign in with Google
          </div>
        </div>
        <div
          className="bg-white flex flex-row items-center justify-center gap-3 w-full md:w-1/2 h-8 px-5"
          id="White1"
        >
          <img src="./apple-icon.svg" className="w-3 shrink-0" id="Apple" />
          <div className="text-center text-xs font-['Montserrat'] text-[#858585]">
            Sign in with Apple
          </div>
        </div>
      </div>
      <div
        className="bg-white flex flex-col mb-2 gap-2 md:mb-3 md:gap-3 w-[250px] md:w-[423px] md:h-[348px] shrink-0 items-start p-4 md:p-8 rounded-[20px]"
        id="Card"
      >
        <div className="text-sm md:text-base font-['Lato']">Email address</div>
        <div
          className="bg-[#f5f5f5] self-stretch flex flex-col justify-center mb-2 pl-4 h-8 md:h-10 shrink-0 items-start rounded-lg"
          id="InputField"
        >
          <input
            type="text"
            className="text-xs md:text-base font-['Lato'] outline-none bg-[#f5f5f5]"
            placeholder="johndoe@gmail.com"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="text-sm md:text-base font-['Lato']">Password</div>
        <div
          className="bg-[#eaeaea] self-stretch flex flex-col justify-center mb-2 pl-4 h-8 md:h-10 shrink-0 items-start rounded-lg"
          id="Input"
        >
          <input
            type="password"
            className="text-xs md:text-base font-['Lato'] outline-none bg-[#eaeaea]"
            placeholder="••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="font-['Lato'] text-sm md:text-base text-[#346bd4] mb-3 ml-px">
          Forgot password?
        </div>

        <Link
          className="bg-[#4285f4] flex w-full h-8 md:h-10 shrink-0 items-center justify-center py-2 rounded-lg"
          id="ButtonPrimary"
          to={usersData[userName] === password ? "dashboard" : ""}
        >
          <div className="text-center text-sm md:text-base font-['Montserrat'] font-bold text-white">
            Sign In
          </div>
        </Link>
      </div>
      <div className="text-center md:self-center text-sm md:text-base justify-center flex flex-col font-['Lato'] text-[#858585]">
        <div>Don’t have an account?</div>
        <div className="text-[#346bd4] contents">Register here</div>
      </div>
    </div>
  );
};

export default RightSide;
