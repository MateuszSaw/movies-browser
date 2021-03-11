import { call, put, takeLatest } from "redux-saga/effects";
import { getMovieDetailsFromApi, getMovieCreditsFromApi } from "../../dataFromApi";
import { fetchDetails, fetchDetailsError, fetchDetailsSuccess } from "./detailsSlice";

function* fetchDetailsHandler({ payload }) {
  try{
    const details = yield call(getMovieDetailsFromApi, payload);
    const movieCredits = yield call(getMovieCreditsFromApi, payload);
    yield put(fetchDetailsSuccess({ details, movieCredits }));
  } catch (error) {
    yield put(fetchDetailsError());
  }
};

export function* detailsSaga(){
 yield takeLatest(fetchDetails.type, fetchDetailsHandler);
}