import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import AllMovies from "../AllMovies/AllMovies";
import { setTopRatedMovies, getTopRatedMovies } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/components/Pagination/Pagination";
import { FetchingDataMovies } from "@/libs/FetchingData";
import { useSearchParams } from "next/navigation";

const TopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(getTopRatedMovies);

  const searchParams = useSearchParams();
  const currPage = searchParams.get("page");
  const [page, setPage] = useState(parseInt(currPage));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const movies = async () => {
      const data = await FetchingDataMovies("top_rated", page);
      dispatch(setTopRatedMovies(data));
    };
    movies();
  }, [page]);

  return (
    <div className="max-w-7xl w-full h-full mx-auto">
      <AllMovies
        movies={topRatedMovies.results}
        title={"Top Rated"}
        loading={loading}
        setLoading={setLoading}
      >
        <Pagination
          url={"top-rated"}
          page={page}
          setPage={setPage}
          lastPage={topRatedMovies.total_pages}
        />
      </AllMovies>
    </div>
  );
};

export default TopRated;
