import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import AllMovies from "../AllMovies/AllMovies";
import { setUpcomingMovies, getUpcomingMovies } from "@/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/components/Pagination/Pagination";
import { FetchingDataMovies } from "@/libs/FetchingData";
import { useSearchParams } from "next/navigation";

const Upcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(getUpcomingMovies);

  const searchParams = useSearchParams();
  const currPage = searchParams.get("page");
  const [page, setPage] = useState(parseInt(currPage));

  useEffect(() => {
    const movies = async () => {
      const data = await FetchingDataMovies("upcoming", page);
      dispatch(setUpcomingMovies(data));
    };
    movies();
  }, [page]);
  return (
    <div className="max-w-7xl w-full h-full mx-auto">
      <Navbar />
      <AllMovies movies={upcomingMovies.results} title={"Upcoming"}>
        <Pagination
          url={"popular"}
          page={page}
          setPage={setPage}
          lastPage={upcomingMovies.total_pages}
        />
      </AllMovies>
    </div>
  );
};

export default Upcoming;
