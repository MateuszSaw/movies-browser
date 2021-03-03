import { getGenreFromApi, getPopularMovies } from "../dataFromApi";
import { call, delay, put, takeEvery, takeLatest, } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMovies, fetchMoviesError, fetchGenres } from './moviesSlice';

function* fetchMoviesListHandler({ payload: page }){
  try{
    yield delay(500);
    const movies = yield call(getPopularMovies, page);
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
 yield takeLatest(fetchMovies.type, fetchMoviesListHandler);
 yield takeEvery(fetchMovies.type, fetchGenresHandler);
}