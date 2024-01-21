import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingCard = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton height={170} className="w-full h-full" />
    </SkeletonTheme>
  );
};

const cards = Array.from({ length: 20 });

export const LoadingData = () => {
  return cards.map((_, index) => {
    return (
      <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
        <Skeleton height={170} />
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
