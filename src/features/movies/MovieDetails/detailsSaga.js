import { call, put, takeEvery, delay, takeLatest } from "redux-saga/effects";
import { getMovieDetailsFromApi, getGenreFromApi, getMovieCreditsFromApi } from "../../dataFromApi";
import { fetchDetails, fetchDetailsError, fetchDetailsSuccess, fetchPersonDetails, fetchGenres  } from "./detailsSlice";

function* fetchDetailsListHandler({ payload: id }){
  try{
    yield delay(100);
    const details = yield call(getMovieDetailsFromApi, id);
    yield put(fetchDetailsSuccess(details));
  } catch (error){
    yield put(fetchDetailsError());
  };
};

function* fetchGenresHandler(){
  try{
    const genres = yield call(getGenreFromApi);
    yield put(fetchGenres(genres));
  } catch (error){
    yield put(fetchDetailsError());
  }
};

function* fetchMovieCrewHandler({ payload: id }){
  try{
    const personDetails = yield call(getMovieCreditsFromApi, id);
    yield put(fetchPersonDetails(personDetails));
  } catch (error){
    yield put(fetchDetailsError());
  }
};

export function* detailsSaga(){
 yield takeLatest(fetchDetails.type, fetchDetailsListHandler);
 yield takeLatest(fetchDetails.type, fetchGenresHandler);
 yield takeLatest(fetchDetails.type, fetchMovieCrewHandler);
}