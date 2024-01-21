import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import AllMovies from "../AllMovies/AllMovies";
import { setPopularMovies, getPopularMovies } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/components/Pagination/Pagination";
import { FetchingDataMovies } from "@/libs/FetchingData";
import { useSearchParams } from "next/navigation";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);

  const searchParams = useSearchParams();
  const currPage = searchParams.get("page");
  const [page, setPage] = useState(parseInt(currPage));

  useEffect(() => {
    const movies = async () => {
      const data = await FetchingDataMovies("popular", page);
      dispatch(setPopularMovies(data));
    };
    movies();
  }, [page]);

  return (
    <div className="max-w-7xl w-full h-full mx-auto">
      <Navbar />
      <AllMovies movies={popularMovies.results} title={"Popular Movies"}>
        <Pagination
          url={"popular"}
          page={page}
          setPage={setPage}
          lastPage={popularMovies.total_pages}
        />
      </AllMovies>
    </div>
  );
};

export default PopularMovies;
