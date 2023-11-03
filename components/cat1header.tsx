"use client";
import Image from "next/image";
import logo from "../public/logo.png";
import Profile from "./profile";

import { useState, useEffect } from "react";
type propsType = {
  page: string;
};

export default function Header1({ page }: propsType) {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const handleHeader = () => {
    if (isLoginVisible) setLoginVisible(false);
    else {
      setLoginVisible(true);
    }
  };

  return (
    <div
      id="header1"
      className={` hidden  z-1020 md:flex lg:grid grid-cols-3 lg:px-16 w-screen h-20 border-b-[1]   items-center ${
        page === "home" ? "sticky" : "static"
      } top-0 bg-white`}
    >
      <Image className="m-3" src={logo} alt="" width={100} height={100} />

      {page == "home" ? (
        <div className="hidden md:block">
          <button className="text-black text-sm px-2 lg:px-4 font-md">
            Stays
          </button>
          <button className="text-gray-500 text-sm px-3 lg:px-4 font-md">
            Experiences
          </button>
          <button className="text-gray-500 text-sm  lg:px-2 font-md">
            Online experiences
          </button>
        </div>
      ) : (
        <div className=" md:hidden flex mr-10 md:mr-4 justify-evenly items-center border rounded-full shadow-md h-16 hover:shadow-lg">
          <button className=" text-left  border-r-2 text-xs px-4 xl:px-8 font-md">
            AnyWhere
          </button>

          <button className="text-left border-r-2 text-xs  px-4 xl:px-8  font-md ">
            Anyweek
          </button>

          <button className="text-left text-gray-400 text-xs font-md  ">
            Add Guests
          </button>

          <i className="float-right fa-solid fa-magnifying-glass bg-red-600 text-white rounded-full p-2"></i>
        </div>
      )}

      <div className="flex justify-center items-center gap-4 lg:gap-8">
        <button className="font-md text-sm">Airbnb your home</button>
        <span className=" material-icons material-symbols-outlined">
          language
        </span>
        <div
          onClick={() => {
            handleHeader();
          }}
          className="flex justify-evenly items-center gap-2 rounded-full border  h-10 w-20 py-1.25 pr-1.25 pl-3 hover:shadow-xl hover:cursor-pointer"
        >
          <i className="fa-solid fa-bars"></i>
          <i className="far fa-user bg-gray-400 rounded-full w-7 h-7 pt-2 text-center"></i>
        </div>
        {isLoginVisible ? (
          <div className="relative">
            <Profile />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
