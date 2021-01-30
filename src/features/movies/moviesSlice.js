import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: true,
    isError: false,
    genres: [],
  },
  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess:  (state, { payload: movies}) => {
      state.movies = movies;
      state.loading = false;
    },
    fetchMoviesError: (state) => {
      state.loading = false;
      state.isError = true;
    },
    resetState: (state) => {
      state.loading = true;
      state.isError = false;
    },
    fetchGenres: (state, { payload: genres}) => {
      state.genres = genres;
    },
  },
});

export const {
fetchMovies,
fetchMoviesSuccess,
fetchMoviesError,
resetState,
fetchGenres,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMoviesList = (state)=> selectMoviesState(state).movies.results;
export const selectLoadingStatus = (state) => selectMoviesState(state).loading;
export const selectErrorStatus = (state) => selectMoviesState(state).isError;

export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;