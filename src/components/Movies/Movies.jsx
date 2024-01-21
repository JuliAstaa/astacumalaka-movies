"use client";

import React, { useEffect } from "react";
import { FetchingDataMovies } from "@/libs/FetchingData";
import { setPopularMovies, getPopularMovies } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const Movies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);

  useEffect(() => {
    const movies = async () => {
      const data = await FetchingDataMovies("popular", 1);
      dispatch(setPopularMovies(data));
    };
    movies();
  }, []);

  return (
    <div className="w-full h-full p-4">
      <Carousel />
      <div className="p-4 mt-24">
        <div className="popular">
          <h1 className="text-xl font-semibold text-white">Popular Movie</h1>
          <div className="w-full h-full mt-8">
            <Card datas={popularMovies.results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
