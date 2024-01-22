"use client";

import React, { useState } from "react";
import Link from "next/link";
import Search from "./Search";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-16 p-4">
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2 lg:col-span-1 title flex items-center">
          <Link href={"/"} className="font-semibold text-white">
            Astacumalaka's <span className="text-red-700">Movie</span>
          </Link>
        </div>
        <div className="hidden  w-full h-full lg:flex justify-center items-center">
          <NavMenu />
        </div>
        <div className=" hidden lg:flex w-full h-full">
          <Search />
        </div>
        <div className="flex lg:hidden justify-end relative">
          <button
            onClick={() => setActive(!active)}
            className={`hamburger flex flex-col justify-between items-center ${
              active ? "hamburger-active" : null
            }`}
          >
            <span className="line origin-left"></span>
            <span className="line origin-center"></span>
            <span className="line origin-left"></span>
          </button>
          <div
            className={`absolute z-50 top-7 w-[300px] h-96 border -right-0 bg-black origin-top-right transition-all ease-in-out duration-300 flex flex-col p-8 ${
              active ? "scale-100" : "scale-0"
            }`}
          >
            <div className="w-full border bg-white rounded-md">
              <Search />
            </div>
            <div className="w-full h-full lg:flex lg:justify-center lg:items-center mt-12">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
