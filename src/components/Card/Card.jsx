import React from "react";
import Image from "next/image";
import { LoadingCard } from "../Loading/Skeleton";

const Card = ({ movie, loading, setLoading }) => {
  const imgUrl = process.env.NEXT_PUBLIC_BASE_IMG_URL;

  return (
    <div className="relative overflow-hidden group hover:scale-95 transition-all ease-in-out duration-300 border rounded-sm">
      <div className="w-full h-56 lg:h-40">
        {loading && (
          <div className="w-full h-full absolute z-20 -top-1 left-0 ">
            <LoadingCard />
          </div>
        )}
        {!movie.poster_path ? (
          <div className="w-full h-full flex justify-center items-center p-1">
            <p className="text-white text-xs text-center">{`image not available :(`}</p>
          </div>
        ) : (
          <Image
            alt="Movie Image"
            src={`${imgUrl}${movie.poster_path}`}
            width={100}
            height={100}
            onLoad={() => setLoading(false)}
            className="w-full h-full object-cover group-hover:scale-125 transition-all ease-in-out duration-300"
          />
        )}
      </div>
      <div className="absolute w-full h-full -bottom-full group-hover:bottom-0 transition-all ease-in-out duration-300 left-0 bg-[rgba(0,0,0,0.6)] flex items-end text-center pb-4">
        <h1 className="font-semibold text-white text-xs text-center w-full">
          {movie.title}
        </h1>
      </div>
    </div>
  );
};

export default Card;
