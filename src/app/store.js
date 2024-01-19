import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "@/features/MovieSlice";

export default configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
