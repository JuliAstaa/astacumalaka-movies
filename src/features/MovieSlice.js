import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    setPopularMovies: (state, action) => {
      const popularMovies = action.payload;
      state.popularMovies = popularMovies;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const { setPopularMovies, setTopRatedMovies, setUpcomingMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;

export const getPopularMovies = (state) => state.movies.popularMovies;
export const getTopRatedMovies = (state) => state.movies.topRatedMovies;
export const getUpcomingMovies = (state) => state.movies.upcomingMovies;
