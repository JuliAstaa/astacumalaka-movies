"use client";

import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Search = () => {
  const inputRef = useRef();
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/search/${inputRef.current.value}?page=1`);
    inputRef.current.value = "";
  };

  return (
    <div className="search w-full flex justify-end">
      <div className="w-full  ">
        <form
          action=""
          className="flex p-1 rounded-md overflow-hidden bg-white w-full"
        >
          <label aria-label="search" htmlFor="search" className="w-full">
            <input
              id="search"
              type="text"
              className="p-1 text-black  w-full rounded-md outline-none"
              ref={inputRef}
            />
          </label>
          <button
            aria-label="Click to search movie"
            onClick={handleClick}
            className="text-xl text-black"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
