import React, { useEffect, useState, lazy, Suspense } from "react";
import { FetchingDetailMovie } from "@/libs/FetchingData";
import { setDetailMovie, getDetailMovie } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoStarSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
const Image = lazy(() => import("next/image"));
import {
  LoadingDetailMovie,
  LoadingCarousel,
  LoadingPoster,
} from "@/components/Loading/Skeleton";

const DetailMovie = ({ movieID }) => {
  const dispatch = useDispatch();
  const detailMovie = useSelector(getDetailMovie);
  const imgURL = process.env.NEXT_PUBLIC_BASE_IMG_URL;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthDetailMovie = async () => {
      const data = await FetchingDetailMovie(movieID);
      dispatch(setDetailMovie(data));
    };

    fecthDetailMovie();
  }, []);

  const movie = detailMovie?.results;

  return (
    <>
      {!movie ? (
        <LoadingDetailMovie />
      ) : (
        <div className="max-w-7xl w-full h-full mx-auto p-4 ">
          <div className="relative">
            <div className="w-full h-[480px]">
              <Suspense fallback={<LoadingCarousel />}>
                {!movie.backdrop_path ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p className="text-white text-center">
                      {`Image not availavble :(`}
                    </p>
                  </div>
                ) : (
                  <Image
                    priority
                    alt={`${movie.title}`}
                    src={`${imgURL}${movie.backdrop_path}`}
                    width={1080}
                    height={720}
                    onLoad={() => setLoading(false)}
                    className="w-full h-full object-cover"
                  />
                )}
              </Suspense>
              <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 left-0"></div>
            </div>
            <div className="grid grid-cols-3 gap-8 w-full lg:w-3/4 h-fit absolute -bottom-72 lg:-bottom-44 lg:left-20">
              <div className="flex lg:justify-center col-span-3 lg:col-span-1 p-4 lg:p-0">
                <div className="lg:h-96 w-40 lg:w-auto relative group transition-all ease-in-out duration-300 overflow-hidden">
                  <Suspense fallback={<LoadingPoster />}>
                    {!movie.backdrop_path ? (
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="text-white text-center">
                          {`Image not availavble :(`}
                        </p>
                      </div>
                    ) : (
                      <Image
                        priority
                        alt={`${movie.title}`}
                        src={`${imgURL}${movie.poster_path}`}
                        width={720}
                        height={480}
                        onLoad={() => setLoading(false)}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </Suspense>
                  <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute -bottom-full group-hover:bottom-0 transition-all ease-in-out duration-300 origin-bottom p-4 hidden lg:flex justify-end items-end">
                    <button
                      aria-label="play the video"
                      className="text-white text-6xl hover:text-slate-400"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-2 flex flex-col gap-4 justify-center p-4 lg:p-0">
                <div className="text">
                  <h1 className="font-semibold text-xl text-white">
                    {movie.title}
                  </h1>
                  <p className="text-slate-300">{movie.overview}</p>
                </div>
                <div className="date text-slate-200">
                  <span>Relase: {movie.release_date}</span>
                </div>
                <div className="rating flex items-center gap-4 text-slate-200">
                  <div className="flex items-center text-slate-100">
                    <span className="text-yellow-500 text-xl">
                      <IoStarSharp />
                    </span>
                    {movie.vote_average}
                  </div>
                  <div>|</div>
                  <div>{movie.vote_count} reviews</div>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="play video mobile"
                    className="text-white flex gap-2 justify-center items-center py-1 w-24 rounded-md bg-red-700 hover:bg-red-800"
                  >
                    PLAY{" "}
                    <span>
                      <FaPlay />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMovie;
