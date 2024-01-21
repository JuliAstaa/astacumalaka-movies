"use client";

import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Card = lazy(() => import("../../Card/Card"));
import { LoadingCard, LoadingData } from "@/components/Loading/LoadingCard";

const AllMovies = ({ children, movies, title, loading, setLoading }) => {
  return (
    <div>
      <div className="w-full h-full p-4">
        <div className="p-4 mt-24">
          <div className="popular">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <div className="w-full h-full mt-8">
              <div className="grid grid-cols-10 gap-4">
                {!movies && <LoadingData />}
                {movies?.map((movie, index) => {
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
        {children}
      </div>
    </div>
  );
};

export default AllMovies;
