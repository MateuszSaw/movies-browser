import { createSlice } from "@reduxjs/toolkit";
const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    loading: true,
    isError: false,
  },

  reducers: {
    fetchGenres: (state) => {
      state.loading = true;
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.loading = false;
    },
    fetchGenresError: state => {
      state.loading = false;
      state.error = true;
  }
  },
});

export const {
fetchGenres,
fetchGenresSuccess,
fetchGenresError,
} = genresSlice.actions;

export const selectGenresState = (state) => state.genres;
export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;