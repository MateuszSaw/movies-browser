import { getPopularPeople, getSearchPeople } from "../dataFromApi";
import { call, delay, put, takeLatest, } from "redux-saga/effects";
import { fetchPersons, fetchPersonsError, fetchPersonsSuccess } from "./personsSlice";

function* fetchPersonsListHandler({ payload }){
  try{
    yield delay(500);
    const persons = payload.query
    ? yield call(getSearchPeople, payload.page, payload.query)
    : yield call(getPopularPeople, payload.page);
    yield put(fetchPersonsSuccess(persons));
  } catch (error){
    yield put(fetchPersonsError());
  };
};

export function* personsSaga(){
 yield takeLatest(fetchPersons.type, fetchPersonsListHandler);
}