import React from "react";
import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <ul className=" w-full h-full flex gap-8 lg:gap-0 flex-col lg:flex-row lg:justify-between items-start lg:items-center">
        <li>
          <Link
            href={"/popular?page=1"}
            className="group text-white hover:text-red-700 transition-all ease-in-out duration-300 flex flex-col items-center"
          >
            Popular
            <span className=" w-[80%] h-[2.5px] bg-red-700 -bottom-1  origin-center transition-all ease-in-out duration-300 scale-0 group-hover:scale-100"></span>
          </Link>
        </li>
        <li>
          <Link
            href={"/top-rated?page=1"}
            className="group text-white hover:text-red-700 transition-all ease-in-out duration-300 flex flex-col items-center"
          >
            Top Rated
            <span className=" w-[80%] h-[2.5px] bg-red-700 -bottom-1  origin-center transition-all ease-in-out duration-300 scale-0 group-hover:scale-100"></span>
          </Link>
        </li>
        <li>
          <Link
            href={"/upcoming?page=1"}
            className="group text-white hover:text-red-700 transition-all ease-in-out duration-300 flex flex-col items-center"
          >
            Upcoming
            <span className=" w-[80%] h-[2.5px] bg-red-700 -bottom-1  origin-center transition-all ease-in-out duration-300 scale-0 group-hover:scale-100"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
