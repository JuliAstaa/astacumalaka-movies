"use client";

import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Card = lazy(() => import("../../Card/Card"));
import { LoadingCard, LoadingData } from "@/components/Loading/Skeleton";

const AllMovies = ({ children, movies, loading, setLoading }) => {
  return (
    <div className="w-full h-full px-4">
      <div className="p-4">
        <div className="popular">
          <div className="w-full h-full">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10  gap-4">
              {!movies && <LoadingData />}
              {movies?.map((movie, index) => {
                return (
                  <Link key={index} href={`/movie/${movie.id}/${movie.title}`}>
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
      {children}
    </div>
  );
};

export default AllMovies;
