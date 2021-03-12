import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getPersonsCreditsFromApi, getPersonsDetailsFromApi } from "../../dataFromApi";
import { fetchPersonsDetails, fetchPersonsDetailsError, fetchPersonsDetailsSuccess } from "./personsDetailsSlice";

function* fetchPersonsDetailsHandler ({ payload }){
  try{
    const personsDetails = yield call(getPersonsDetailsFromApi, payload);
    const moviesDetails = yield call(getPersonsCreditsFromApi, payload);
    yield put(fetchPersonsDetailsSuccess({personsDetails, moviesDetails }));
  } catch (error){
    yield put(fetchPersonsDetailsError());
  };
};

export function* personsDetailsSaga(){
  yield takeLatest(fetchPersonsDetails.type, fetchPersonsDetailsHandler);
};