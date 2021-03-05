import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/moviesSlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import detailsSlice from "./features/movies/MovieDetails/detailsSlice";
import personsSlice from "./features/persons/personsSlice";
import personsDetailsSlice from "./features/persons/PersonDetails/personsDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    details: detailsSlice,
    persons: personsSlice,
    personsDetails: personsDetailsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;