import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useSelector } from "react-redux";
import { getPopularMovies } from "@/features/MovieSlice";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  const popularMovie = useSelector(getPopularMovies);
  const imgUrl = process.env.NEXT_PUBLIC_BASE_IMG_URL;

  return (
    <div className="w-full">
      <Swiper
        autoplay={{ delay: 8000 }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        pagination={{ clickable: true }}
      >
        {popularMovie.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div className="w-full h-[480px] flex justify-center items-center overflow-hidden relative group">
                  <Image
                    priority={true}
                    alt={movie.title}
                    src={`${imgUrl}${movie.backdrop_path}`}
                    width={1080}
                    height={720}
                    className="w-full h-full object-cover object-center "
                  />
                  <div
                    onClick={() => console.log("hayolo ke klik")}
                    className="absolute w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)] top-0 left-0 p-8 cursor-pointer"
                  >
                    <div className="w-1/2 flex flex-col gap-4">
                      <div className="title">
                        <h1 className="text-xl text-white font-bold">
                          {movie.title}
                        </h1>
                        <p className="text-slate-400 text-sm">
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
                  <div className="absolute swiper-button-prev top-0 left-0 h-full bg-[rgba(0,0,0,0.2)] hidden group-hover:flex items-center p-2">
                    <button className="text-white text-3xl rotate-180  h-full">
                      <MdOutlineDoubleArrow />
                    </button>
                  </div>
                  <div className="absolute swiper-button-next top-0 right-0 h-full bg-[rgba(0,0,0,0.2)] hidden group-hover:flex items-center p-2">
                    <button className="text-white text-3xl  h-full">
                      <MdOutlineDoubleArrow />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
