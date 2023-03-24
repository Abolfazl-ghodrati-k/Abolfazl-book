import { all } from "redux-saga/effects";
import { weather_saga } from "./WeatherSaga";

export default function* rootSaga() {
  yield all([weather_saga()]);
}
