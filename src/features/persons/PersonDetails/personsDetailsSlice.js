import { createSlice } from "@reduxjs/toolkit";

const personsDetailsSlice = createSlice({
  name: "personsDetails",
  initialState: {
    personsDetails: '',
    loading: true,
    isError: false,
  },
  reducers: {
    fetchPersonsDetails: (state) => {
      state.loading = true;
    },
    fetchPersonsDetailsSuccess:  (state, { payload: personsDetails }) => {
      state.personsDetails = personsDetails;
      state.loading = false;
    },
    fetchPersonsDetailsError: (state) => {
      state.loading = false;
      state.isError = true;
    },
    resetState: (state) => {
      state.loading = true;
      state.isError = false;
      state.personsDetails = [];
    },
  },
});

export const {
  fetchPersonsDetails,
  fetchPersonsDetailsSuccess,
  fetchPersonsDetailsError,
  resetState,
} = personsDetailsSlice.actions;

export const selectPersonsDetailsState = (state) => state.personsDetails;
export const selectPersonsDetails = (state) => selectPersonsDetailsState(state).personsDetails;
export const selectPersonsDetailsLoadingStatus = (state) => selectPersonsDetailsState(state).loading;
export const selectPersonsDetailsErrorStatus = (state) => selectPersonsDetailsState(state).isError;

export default personsDetailsSlice.reducer