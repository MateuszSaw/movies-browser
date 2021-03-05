import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getPersonsDetailsFromApi } from "../../dataFromApi";
import { fetchPersonsDetails, fetchPersonsDetailsError, fetchPersonsDetailsSuccess } from "./personsDetailsSlice";

function* fetchPersonsDetailsHandler ({payload: id }){
  try{
    const personsDetails = yield call(getPersonsDetailsFromApi, id);
    yield put(fetchPersonsDetailsSuccess(personsDetails));
  } catch (error){
    yield put(fetchPersonsDetailsError());
  };
};

export function* personsDetailsSaga(){
  yield takeEvery(fetchPersonsDetails.type, fetchPersonsDetailsHandler);
};