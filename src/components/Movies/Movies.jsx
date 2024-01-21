"use client";

import React, { useEffect, useState, Suspense, lazy } from "react";
import { FetchingDataMovies } from "@/libs/FetchingData";
import { setPopularMovies, getPopularMovies } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import Link from "next/link";
const Card = lazy(() => import("../Card/Card"));
import { LoadingCard, LoadingData } from "../Loading/LoadingCard";

const Movies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);
  const [loading, setLoading] = useState(true);

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
            <div className="grid grid-cols-10 gap-4">
              {!popularMovies.results && <LoadingData />}
              {popularMovies.results?.map((movie, index) => {
                return (
                  <Link key={index} href={`movie/${movie.id}`}>
                    <Suspense fallback={<LoadingCard />}>
                      <Card
                        movie={movie}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </Suspense>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
