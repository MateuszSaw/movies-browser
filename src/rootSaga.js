import { all } from "redux-saga/effects";
import { detailsSaga } from "./features/movies/MovieDetails/detailsSaga";
import { moviesSaga } from "./features/movies/moviesSaga";
import { personsSaga } from "./features/persons/personsSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    detailsSaga(),
    personsSaga()
  ]);
};