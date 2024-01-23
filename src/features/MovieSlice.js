import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    detailMovie: {},
    searchMovie: {},
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
    setDetailMovie: (state, action) => {
      const result = {
        results: action.payload,
      };
      state.detailMovie = result;
    },
    setSearchMovie: (state, action) => {
      const results = {
        movies: action.payload,
      };
      state.searchMovie = results;
    },
  },
});

export const {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setDetailMovie,
  setSearchMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;

export const getPopularMovies = (state) => state.movies.popularMovies;
export const getTopRatedMovies = (state) => state.movies.topRatedMovies;
export const getUpcomingMovies = (state) => state.movies.upcomingMovies;
export const getDetailMovie = (state) => state.movies.detailMovie;
export const getSearchMovie = (state) => state.movies.searchMovie;
