import React, { useState } from "react";

const Contact = ({ setPage, setProfileData, setSearchParams }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div
        id="InputTitle2"
        className="font-['Figtree'] leading-[24px] text-[#231f20] self-start ml-0"
      >
        Enter Name*
      </div>
      <div
        id="InputContainer"
        className="border-solid border-[#f2f2f2] bg-white flex flex-col justify-center pl-4 h-12 shrink-0 items-start mb-4 mx-0 border rounded-lg"
      >
        <input
          id="PlaceholderText"
          className="font-['Figtree'] leading-[24px] text-[#999ca0] outline-none w-full"
          placeholder="Eg. John Doe"
          onChange={(e) => {
            setName(e.target.value);
            setSearchParams(
              (prev) => {
                prev.set("name", e.target.value);
                return prev;
              },
              { replace: true }
            );
          }}
        />
      </div>
      <div
        id="InputTitle3"
        className="font-['Figtree'] leading-[24px] self-start ml-0"
      >
        Enter Email*
      </div>
      <div
        id="ChipHolder"
        className="border-solid border-[#f2f2f2] overflow-hidden bg-white flex flex-row justify-between h-12 shrink-0 items-center mb-4 mx-0 px-3 border rounded-lg"
      >
        <input
          id="PlaceholderText"
          className="font-['Figtree'] leading-[24px] text-[#999ca0] outline-none w-full"
          placeholder="Eg. John@xyz.com"
          onChange={(e) => {
            setEmail(e.target.value);
            setSearchParams(
              (prev) => {
                prev.set("email", e.target.value);
                return prev;
              },
              { replace: true }
            );
          }}
        />
        <button
          id="Button1"
          className="overflow-hidden flex flex-col w-6 shrink-0 h-6 items-center py-1 rounded-lg"
        >
          <img src="./images/controls.svg" id="Controls" className="w-4" />
        </button>
      </div>
      <div
        id="InputTitle4"
        className="font-['Figtree'] leading-[24px] self-start ml-0"
      >
        Enter Phone*
      </div>
      <div
        id="ChipHolder1"
        className="border-solid border-[#f2f2f2] overflow-hidden bg-white flex flex-row justify-between h-12 shrink-0 items-center mx-0 px-3 border rounded-lg"
      >
        <input
          id="PlaceholderText"
          className="font-['Figtree'] leading-[24px] text-[#999ca0] outline-none w-full"
          placeholder="Eg. 9123456789"
          onChange={(e) => {
            setPhone(e.target.value);
            setSearchParams(
              (prev) => {
                prev.set("phone", e.target.value);
                prev.set("profile", "true");
                return prev;
              },
              { replace: true }
            );
          }}
        />
        <button
          id="Button2"
          className="overflow-hidden flex flex-col w-6 shrink-0 h-6 items-center py-1 rounded-lg"
        >
          <img src="./images/controls.svg" id="Controls1" className="w-4" />
        </button>
      </div>

      <div
        id="FooterModuleRoot"
        className="flex justify-end items-center w-full h-20"
      >
        <button
          id="ButtonText"
          className="text-center bg-[#3e84f8] w-16 h-10 rounded-lg text-sm font-['Figtree'] font-semibold text-white"
          onClick={() => {
            setPage(2);
            setProfileData({ ...{ name: name, email: email, phone: phone } });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Contact;
