import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    loading: true,
    isError: false,
    genres: [],

  },
  reducers: {
    fetchDetails: (state) => {
      state.loading = true;
    },
    fetchDetailsSuccess:  (state, { payload: details}) => {
      state.details = details;
      state.loading = false;
    },
    fetchDetailsError: (state) => {
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
fetchDetails,
fetchDetailsSuccess,
fetchDetailsError,
resetState,
fetchGenres,
} = detailsSlice.actions;

export const selectDetailsState = (state) => state.details;
export const selectDetails = (state) => selectDetailsState(state).details;
export const selectDetailsLoadingStatus = (state) => selectDetailsState(state).loading;
export const selectDetailsErrorStatus = (state) => selectDetailsState(state).isError;

export const selectGenres = (state) => selectDetailsState(state).genres;

export default detailsSlice.reducer;