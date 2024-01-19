"use client";

import React, { useEffect } from "react";
import { FetchingDataMovies } from "@/libs/FetchingData";
import {
  setPopularMovies,
  getPopularMovies,
  setTopRatedMovies,
  getTopRatedMovies,
  setUpcomingMovies,
  getUpcomingMovies,
} from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const Movies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);
  const topRatedMovies = useSelector(getTopRatedMovies);
  const upcomingMovies = useSelector(getUpcomingMovies);

  useEffect(() => {
    const movies = async () => {
      const data = await FetchingDataMovies("popular");
      dispatch(setPopularMovies(data));
    };
    movies();
  }, []);

  useEffect(() => {
    const movies = async () => {
      const data = await FetchingDataMovies("top_rated");
      dispatch(setTopRatedMovies(data));
    };
    movies();
  }, []);

  useEffect(() => {
    const movies = async () => {
      const data = await FetchingDataMovies("upcoming");
      dispatch(setUpcomingMovies(data));
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
            <Card datas={popularMovies} />
          </div>
        </div>
        <div className="top-rated mt-12">
          <h1 className="text-xl font-semibold text-white">Top Rated</h1>
          <div className="w-full h-full mt-8">
            <Card datas={topRatedMovies} />
          </div>
        </div>
        <div className="top-rated mt-12">
          <h1 className="text-xl font-semibold text-white">Upcoming</h1>
          <div className="w-full h-full mt-8">
            <Card datas={upcomingMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
