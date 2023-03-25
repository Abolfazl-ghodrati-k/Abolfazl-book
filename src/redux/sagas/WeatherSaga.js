import { call, delay, put, takeEvery } from "redux-saga/effects";
import { WEATHER_ACTION } from ".";
import recieve_data from "../../services/api/weather";
import {
  START_LOADING,
  FINISH_LOADING,
  SET_WEATHER_DATA,
  SET_WEATHER_ERROR,
} from "../actionTypes";

function* weather_action(action) {
  const city = action.payload;
  yield put({ type: START_LOADING });
  const { data, error } = yield call(recieve_data, city ?? "tehran");
  yield put({ type: FINISH_LOADING });
  if (data) {
    yield put({ type: SET_WEATHER_DATA, payload: data });
    return;
  }
  if (error) {
    yield put({
      type: SET_WEATHER_ERROR,
      payload: error?.response?.data ?? error,
    });
    return;
  }
}

export function* weather_saga() {
  yield takeEvery(WEATHER_ACTION, weather_action);
}
