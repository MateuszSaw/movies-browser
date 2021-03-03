import { getPopularPeople } from "../dataFromApi";
import { call, delay, put, takeLatest, } from "redux-saga/effects";
import { fetchPersons, fetchPersonsError, fetchPersonsSuccess } from "./personsSlice";

function* fetchPersonsListHandler({ payload: page }){
  try{
    yield delay(500);
    const persons = yield call(getPopularPeople, page);
    yield put(fetchPersonsSuccess(persons));
  } catch (error){
    yield put(fetchPersonsError());
  };
};

export function* personsSaga(){
 yield takeLatest(fetchPersons.type, fetchPersonsListHandler);
}