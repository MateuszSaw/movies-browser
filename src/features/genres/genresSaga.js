import { takeLatest, put, call } from "@redux-saga/core/effects";
import { getGenreFromApi } from "../dataFromApi";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";

function* fetchGenresHandler(){
  try{
    const genres = yield call(getGenreFromApi);
    yield put(fetchGenresSuccess(genres));
  } catch (error){
    yield put(fetchGenresError());
  }
};

export function* genresSaga(){
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
};