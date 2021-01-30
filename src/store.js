import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/moviesSlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import detailsSlice from "./features/movies/MovieDetails/detailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    details: detailsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;