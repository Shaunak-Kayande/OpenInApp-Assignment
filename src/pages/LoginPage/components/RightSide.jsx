import React from "react";

const RightSide = () => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="text-4xl font-['Montserrat'] font-bold">Sign In</div>
      <div className="font-['Lato'] mb-5">Sign in to your account</div>
      <div className="flex flex-row mb-4 gap-6 w-full items-start">
        <div
          className="bg-white flex flex-row gap-3 w-1/2 h-8 items-center px-5"
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
          className="bg-white flex flex-row gap-3 w-1/2 h-8 items-center px-5"
          id="White1"
        >
          <img src="./apple-icon.svg" className="w-3 shrink-0" id="Apple" />
          <div className="text-center text-xs font-['Montserrat'] text-[#858585]">
            Sign in with Apple
          </div>
        </div>
      </div>
      <div
        className="bg-white flex flex-col mb-3 gap-3 w-[423px] h-[348px] shrink-0 items-start p-8 rounded-[20px]"
        id="Card"
      >
        <div className="font-['Lato']">Email address</div>
        <div
          className="bg-[#f5f5f5] self-stretch flex flex-col justify-center mb-2 pl-4 h-10 shrink-0 items-start rounded-lg"
          id="InputField"
        >
          <div className="font-['Lato']">johndoe@gmail.com</div>
        </div>
        <div className="font-['Lato']">Password</div>
        <div
          className="bg-[#eaeaea] self-stretch flex flex-col justify-center mb-2 pl-4 h-10 shrink-0 items-start rounded-lg"
          id="Input"
        >
          <div className="font-['Lato']">••••••••</div>
        </div>
        <div className="font-['Lato'] text-[#346bd4] mb-3 ml-px">
          Forgot password?
        </div>

        <button
          className="bg-[#4285f4] flex w-full h-10 shrink-0 items-center justify-center py-2 rounded-lg"
          id="ButtonPrimary"
        >
          <div className="text-center font-['Montserrat'] font-bold text-white">
            Sign In
          </div>
        </button>
      </div>
      <div className="text-center font-['Lato'] text-[#858585] ml-16">
        Don’t have an account?{" "}
        <div className="text-[#346bd4] contents">Register here</div>
      </div>
    </div>
  );
};

export default RightSide;
