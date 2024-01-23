import React, { useState, useEffect } from "react";
import AllMovies from "../AllMovies/AllMovies";
import { setSearchMovie, getSearchMovie } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/components/Pagination/Pagination";
import { FetchingSearchMovie } from "@/libs/FetchingData";
import { useSearchParams } from "next/navigation";

const SearchMovie = ({ keyword }) => {
  const dispatch = useDispatch();
  const searchMovie = useSelector(getSearchMovie);

  const searchParams = useSearchParams();
  const currPage = searchParams.get("page");
  const [page, setPage] = useState(parseInt(currPage));
  const [loading, setLoading] = useState(true);

  const newKeyword = decodeURIComponent(keyword);

  useEffect(() => {
    setLoading(true);
    const movies = async () => {
      const data = await FetchingSearchMovie(keyword, page);
      dispatch(setSearchMovie(data));
    };
    movies();
  }, [page]);

  return (
    <div className="max-w-7xl w-full h-full mx-auto ">
      <div className="p-4 mt-24">
        <h1 className="text-xl font-semibold text-white  p-4">
          Search with{" "}
          <span className="font-bold underline underline-offset-4">
            {newKeyword}
          </span>{" "}
          keywords
        </h1>
      </div>
      {searchMovie.total_results === 0 ? (
        <div className="w-full h-48 flex justify-center items-center">
          <p className="text-white">{`Movie not found:(`}</p>
        </div>
      ) : !searchMovie ? null : (
        <AllMovies
          movies={searchMovie.results}
          loading={loading}
          setLoading={setLoading}
        >
          <Pagination
            url={`search/${keyword}`}
            page={page}
            setPage={setPage}
            lastPage={searchMovie.total_pages}
          />
        </AllMovies>
      )}
    </div>
  );
};

export default SearchMovie;
