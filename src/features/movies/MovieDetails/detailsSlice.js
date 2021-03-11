import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    movieCredits: [],
    loading: true,
    isError: false,
  },
  reducers: {
    fetchDetails: (state) => {
      state.loading = true;
    },
    fetchDetailsSuccess:  (state, { payload }) => {
      state.details = payload.details;
      state.movieCredits = payload.movieCredits;
      state.loading = false;
    },
    fetchDetailsError: (state) => {
      state.loading = false;
      state.isError = true;
    },
    resetState: (state) => {
      state.loading = true;
      state.isError = false;
      state.details = [];
      state.movieCredits= [];
    },
  },
});

export const {
fetchDetails,
fetchDetailsSuccess,
fetchDetailsError,
resetState,
} = detailsSlice.actions;

export const selectDetailsState = (state) => state.details;
export const selectDetailsLoadingStatus = (state) => selectDetailsState(state).loading;
export const selectDetailsErrorStatus = (state) => selectDetailsState(state).isError;

export const selectDetails = (state) => selectDetailsState(state).details;
export const selectMovieCredits = (state) => selectDetailsState(state).movieCredits;
export const selectMovieCrew = (state) => selectMovieCredits(state).crew;
export const selectMovieCast = (state) => selectMovieCredits(state).cast;

export default detailsSlice.reducer;