"use client";

import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div className="search w-full flex justify-end">
      <div className="w-full  ">
        <form
          action=""
          className="flex p-1 rounded-md overflow-hidden bg-white w-full"
        >
          <label htmlFor="search"></label>
          <input
            id="search"
            type="text"
            className="p-1 text-black w-full rounded-md outline-none"
            ref={inputRef}
          />
          <button onClick={handleClick} className="text-xl text-black">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
