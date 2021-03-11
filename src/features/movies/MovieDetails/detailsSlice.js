import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    loading: true,
    isError: false,
    personDetails: [],
  },
  reducers: {
    fetchDetails: (state) => {
      state.loading = true;
    },
    fetchDetailsSuccess:  (state, { payload: details }) => {
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
      state.details = [];
      state.personDetails= [];
      state.genres = [];
    },
    fetchPersonDetails: (state, { payload: personDetails}) => {
      state.personDetails = personDetails;
      state.loading = false;
    },
  },
});

export const {
fetchDetails,
fetchDetailsSuccess,
fetchDetailsError,
resetState,
fetchPersonDetails,
} = detailsSlice.actions;

export const selectDetailsState = (state) => state.details;
export const selectDetails = (state) => selectDetailsState(state).details;
export const selectDetailsLoadingStatus = (state) => selectDetailsState(state).loading;
export const selectDetailsErrorStatus = (state) => selectDetailsState(state).isError;

export const selectPersonDetails = (state) => selectDetailsState(state).personDetails;
export const selectPersonDetailsCrew = (state) => selectPersonDetails(state).crew;
export const selectPersonDetailsCast = (state) => selectPersonDetails(state).cast;

export default detailsSlice.reducer;