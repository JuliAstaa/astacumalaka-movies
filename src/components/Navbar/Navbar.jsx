import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-16 p-4">
      <div className="grid grid-cols-3 gap-16">
        <div className="title flex items-center">
          <h1 className="font-semibold text-white">
            Astacumalaka's <span className="text-red-700">Movie</span>
          </h1>
        </div>
        <div className="">
          <div className="w-full h-full flex justify-between items-center">
            <ul className="w-full h-full flex justify-between items-center">
              <li>
                <Link
                  href={"/popular"}
                  className="group text-white hover:text-red-700 transition-all ease-in-out duration-300 flex flex-col items-center"
                >
                  Popular
                  <span className=" w-[80%] h-[2.5px] bg-red-700 -bottom-1  origin-center transition-all ease-in-out duration-300 scale-0 group-hover:scale-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/popular"}
                  className="group text-white hover:text-red-700 transition-all ease-in-out duration-300 flex flex-col items-center"
                >
                  Top Rated
                  <span className=" w-[80%] h-[2.5px] bg-red-700 -bottom-1  origin-center transition-all ease-in-out duration-300 scale-0 group-hover:scale-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/popular"}
                  className="group text-white hover:text-red-700 transition-all ease-in-out duration-300 flex flex-col items-center"
                >
                  Upcoming
                  <span className=" w-[80%] h-[2.5px] bg-red-700 -bottom-1  origin-center transition-all ease-in-out duration-300 scale-0 group-hover:scale-100"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="search w-full flex justify-end">
          <div className="w-full bg-white flex p-1 rounded-md overflow-hidden">
            <label htmlFor="search"></label>
            <input
              id="search"
              type="text"
              className="p-1 text-black w-full rounded-md outline-none"
            />
            <button className="text-xl text-black">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
