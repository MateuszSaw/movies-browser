import { getPopularMovies, getSearchMovies } from "../dataFromApi";
import { call, delay, put, takeLatest, } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMovies, fetchMoviesError } from './moviesSlice';

function* fetchMoviesListHandler({ payload }){
  try{
    yield delay(300);
    const movies = payload.query
    ? yield call(getSearchMovies, payload.page, payload.query)
    : yield call(getPopularMovies, payload.page);
    yield put(fetchMoviesSuccess(movies));
  } catch (error){
    yield put(fetchMoviesError());
  };
};

export function* moviesSaga(){
 yield takeLatest(fetchMovies.type, fetchMoviesListHandler);
}