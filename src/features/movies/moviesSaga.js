import { dataFromApi, getGenreFromApi } from "../dataFromApi";
import { call, delay, put, takeEvery, } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMovies, fetchMoviesError, fetchGenres } from './moviesSlice';

function* fetchMoviesListHandler(){
  try{
    yield delay(1000);
    const movies = yield call(dataFromApi);
    yield put(fetchMoviesSuccess(movies));
  } catch (error){
    yield put(fetchMoviesError());
  };
};

function* fetchGenresHandler(){
  try{
    const genres = yield call(getGenreFromApi);
    yield put(fetchGenres(genres));
  } catch (error){
    yield put(fetchMoviesError());
  }
};

export function* moviesSaga(){
 yield takeEvery(fetchMovies.type, fetchMoviesListHandler);
 yield takeEvery(fetchMovies.type, fetchGenresHandler);
}