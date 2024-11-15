import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between p-10 dark:bg-slate-900 bg-slate-100 ">
      {/* <hr  className="text-black"/> */}
      <div>
        <Link to={"/"}>
        <img 
          src={
            "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1212,c_limit/940dc710-5d99-42c3-928f-0581e9e79dc2/never-done-leaving-a-mark-swoosh.jpg"
          }
          className="w-[180px]"
          alt=""
        />
        </Link>
        
      </div>
      <div className="text-3xl text-blue-800 flex ">
        <Link to={"/create"}>
          <MdOutlineAddBox className="text-3xl mx-10 text-black dark:text-slate-100" />
        </Link>
        <button className="flex" onClick={toggleDarkMode}>
          {dark ? (
            <div className="flex">
              <IoSunnyOutline className="text-slate-100" />
            </div>
          ) : (
            <div className="flex text-slate-900 text-3xl">
              <FaRegMoon />
            </div>
          )}
        </button>
        {/* <IoSunnyOutline /> */}
      </div>
    </div>
  );
};

export default Navbar;
