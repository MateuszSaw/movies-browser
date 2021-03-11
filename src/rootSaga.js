import { all } from "redux-saga/effects";
import { genresSaga } from "./features/genres/genresSaga";
import { detailsSaga } from "./features/movies/MovieDetails/detailsSaga";
import { moviesSaga } from "./features/movies/moviesSaga";
import { personsDetailsSaga } from "./features/persons/PersonDetails/personsDetailsSaga";
import { personsSaga } from "./features/persons/personsSaga";


export default function* rootSaga() {
  yield all([
    moviesSaga(),
    genresSaga(),
    detailsSaga(),
    personsSaga(),
    personsDetailsSaga(),
  ]);
};