"use client";

import React from "react";
import Card from "../../Card/Card";

const AllMovies = ({ children, movies, title }) => {
  return (
    <div>
      <div className="w-full h-full p-4">
        <div className="p-4 mt-24">
          <div className="popular">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <div className="w-full h-full mt-8">
              <Card datas={movies} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AllMovies;
