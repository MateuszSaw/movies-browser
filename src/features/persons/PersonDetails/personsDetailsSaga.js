import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
import { getPersonsCreditsFromApi, getPersonsDetailsFromApi } from "../../dataFromApi";
import { fetchMoviesDetails, fetchPersonsDetails, fetchPersonsDetailsError, fetchPersonsDetailsSuccess } from "./personsDetailsSlice";

function* fetchPersonsDetailsHandler ({payload: id }){
  try{
    yield delay(100);
    const personsDetails = yield call(getPersonsDetailsFromApi, id);
    yield put(fetchPersonsDetailsSuccess(personsDetails));
  } catch (error){
    yield put(fetchPersonsDetailsError());
  };
};

function* fetchPersonCrewHandler({ payload: id }){
  try{
    const moviesDetails = yield call(getPersonsCreditsFromApi, id);
    yield put(fetchMoviesDetails(moviesDetails));
  } catch (error){
    yield put(fetchPersonsDetailsError());
  }
};

export function* personsDetailsSaga(){
  yield takeEvery(fetchPersonsDetails.type, fetchPersonsDetailsHandler);
  yield takeEvery(fetchPersonsDetails.type, fetchPersonCrewHandler);
};