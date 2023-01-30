import React from "react";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/LoggedIn/loggedInSlice";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className=" h-20 flex items-center justify-between  ">
      <div>
        <img
          src="logo.png"
          className="w-12 h-12 mx-auto rounded-2xl cursor-pointer md:w-20 md:h-20"
        />
      </div>
      <div className=" flex items-center">
        <div className="p-1 hover:bg-slate-300 rounded-full transition-all">
          <a href="https://www.facebook.com/anujshresth007/">
            <TfiFacebook className=" mx-2 cursor-pointer " />
          </a>
        </div>
        <div className="p-1 hover:bg-slate-300 rounded-full transition-all">
          <a href="">
            <TfiInstagram className=" mx-2 cursor-pointer " />
          </a>
        </div>
        <div className="p-1 hover:bg-slate-300 rounded-full transition-all">
          <a href="https://www.linkedin.com/in/anuj-shrestha-b00113128/">
            <TfiLinkedin className=" mx-2 cursor-pointer " />
          </a>
        </div>
        <div className="pt-1 p-0 hover:bg-slate-300 rounded-full transition-all">
          <button
            className="p-0 m-0 "
            onClick={() => {
              dispatch(logOut());
            }}
          >
            <BiExit className=" mx-2 cursor-pointer " />
          </button>
        </div>
        <input
          className=" shadow-lg rounded-2xl px-3 py-2 placeholder-gray-500"
          placeholder="Search..."
        />
        <div className="p-2 bg-black rounded-2xl">
          <BsSearch className=" bg-black text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
