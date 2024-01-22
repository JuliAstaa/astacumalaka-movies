import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { getPopularMovies } from "@/features/MovieSlice";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense } from "react";
import { LoadingCarousel } from "../Loading/Skeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const popularMovie = useSelector(getPopularMovies);
  const imgUrl = process.env.NEXT_PUBLIC_BASE_IMG_URL;

  return (
    <Suspense fallback={<p className="text-white">Loading bjirrr</p>}>
      <Swiper
        autoplay={{ delay: 8000 }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {!popularMovie.results && <LoadingCarousel />}
        {popularMovie.results?.map((movie, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <div className="relative w-full h-full flex">
                <div className="w-full h-[480px] flex justify-center items-center overflow-hidden group relative">
                  <Image
                    priority={true}
                    alt={movie.title}
                    src={`${imgUrl}${movie.backdrop_path}`}
                    width={1080}
                    height={720}
                    className="w-full h-full object-cover object-center "
                  />
                  <div className="absolute w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)] top-0 left-0 p-8 cursor-pointer">
                    <div className="w-full lg:w-1/2 h-full lg:h-auto flex flex-col justify-end lg:justify-start lg:gap-4">
                      <div className="title">
                        <h1 className="text-xl text-white font-bold">
                          {movie.title}
                        </h1>
                        <p className="hidden lg:block text-slate-400 text-sm">
                          {movie.overview}
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Suspense>
  );
};

export default Carousel;
