import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const movies = async () => {
      const data = await FetchingDataMovies("popular", page);
      dispatch(setPopularMovies(data));
    };
    movies();
  }, [page]);

  return (
    <div className="max-w-7xl w-full h-full mx-auto">
      <div className="px-4 mt-24">
        <h1 className="text-xl font-semibold text-white  p-4">Popular</h1>
      </div>
      <AllMovies
        movies={popularMovies.results}
        title={"Popular Movies"}
        loading={loading}
        setLoading={setLoading}
      >
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
