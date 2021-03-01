import { dataFromApi, getGenreFromApi, getSearchMovies } from "../dataFromApi";
import { call, delay, put, takeEvery, takeLatest, } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMovies, fetchMoviesError, fetchGenres } from './moviesSlice';

function* fetchMoviesListHandler({ payload }){
  try{
    yield delay(300);
    const movies = payload.query
    ? yield call(getSearchMovies, payload.page, payload.query)
    : yield call(dataFromApi, payload.page);

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