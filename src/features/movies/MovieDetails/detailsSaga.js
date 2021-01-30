import { call, delay, put, takeEvery, } from "redux-saga/effects";
import { getDetailsFromApi, getGenreFromApi } from "../../dataFromApi";
import { fetchGenres } from "../moviesSlice";
import { fetchDetails, fetchDetailsError, fetchDetailsSuccess } from "./detailsSlice";

function* fetchDetailsListHandler({ payload: id }){
  try{
    yield delay(1000);
    const details = yield call(getDetailsFromApi, id);
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

export function* detailsSaga(){
 yield takeEvery(fetchDetails.type, fetchDetailsListHandler);
 yield takeEvery(fetchDetails.type, fetchGenresHandler);
}