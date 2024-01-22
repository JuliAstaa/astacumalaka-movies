import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingCard = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-full h-56 md:h-72 lg:h-44">
        <Skeleton className="w-full h-full" />
      </div>
    </SkeletonTheme>
  );
};

const cards = Array.from({ length: 20 });

export const LoadingData = () => {
  return cards.map((_, index) => {
    return (
      <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
        <div className="w-full h-56 md:h-72 lg:h-44">
          <Skeleton className="w-full h-full" />
        </div>
      </SkeletonTheme>
    );
  });
};

export const LoadingCarousel = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton height={480} className="w-full h-full" />
    </SkeletonTheme>
  );
};

export const LoadingDetailMovie = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="max-w-7xl w-full h-full mx-auto p-4 relative">
        <div className="w-full h-[480px] relative">
          <div className="w-full h-full">
            <Skeleton height={480} className="w-full h-full" />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 left-0"></div>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full lg:w-3/4 h-fit absolute -bottom-72 lg:-bottom-44 lg:left-20">
          <div className="flex lg:justify-center col-span-3 lg:col-span-1 p-4 lg:p-0">
            <div className="lg:h-96 h-56 w-40 lg:w-72">
              <Skeleton className="w-full h-full" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-4 justify-center p-4 lg:p-0">
            <div className="text pr-4">
              <h1 className="font-semibold text-xl text-white">
                <Skeleton width={350} className="w-full h-full" />
              </h1>
              <p className="text-slate-300">
                <Skeleton count={3} className="w-full h-full" />
              </p>
            </div>
            <div className="date text-slate-200">
              <span>
                <Skeleton width={200} className="w-full h-full" />
              </span>
            </div>
            <div className="rating flex items-center gap-4 text-slate-200">
              <div className="flex items-center text-slate-100">
                <Skeleton width={150} className="w-full h-full" />
              </div>
              <div>
                {" "}
                <Skeleton width={150} className="w-full h-full" />
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                aria-label="play video mobile"
                className="text-white flex gap-2 justify-center items-center py-1 w-24 rounded-md bg-red-700 hover:bg-red-800"
              >
                <Skeleton className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const LoadingPoster = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="lg:h-96 h-56 w-40 lg:w-72">
        <Skeleton className="w-full h-full" />
      </div>
    </SkeletonTheme>
  );
};
