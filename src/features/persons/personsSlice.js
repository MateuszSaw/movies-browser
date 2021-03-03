import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "persons",
  initialState: {
    persons: [],
    loading: true,
    isError: false,

  },
  reducers: {
    fetchPersons: (state) => {
      state.loading = true;
    },
    fetchPersonsSuccess:  (state, { payload: persons }) => {
      state.persons = persons;
      state.loading = false;
    },
    fetchPersonsError: (state) => {
      state.loading = false;
      state.isError = true;
    },
    resetState: (state) => {
      state.loading = true;
      state.isError = false;
      state.persons = [];
    },
  },
});

export const {
fetchPersons,
fetchPersonsSuccess,
fetchPersonsError,
resetState,
} = moviesSlice.actions;

export const selectPersonsState = (state) => state.persons;
export const selectPersonsList = (state)=> selectPersonsState(state).persons.results;
export const selectTotalPages = (state)=> selectPersonsState(state).persons.total_pages;
export const selectLoadingStatus = (state) => selectPersonsState(state).loading;
export const selectErrorStatus = (state) => selectPersonsState(state).isError;

export default moviesSlice.reducer;