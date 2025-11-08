import { SET_CITY, SET_WEATHER_DATA, SET_WEATHER_ERROR, HANDLE_SHOW_WEATHER } from "../actionTypes";

const initialState = {
  city: "",
  data: null,
  error: null,
};

export default function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_SHOW_WEATHER:
      return Object.assign({}, state, { show: action.payload });
    case SET_CITY:
      return Object.assign({}, state, { city: action.payload });
    case SET_WEATHER_DATA:
      return Object.assign({}, state, { data: action.payload });
    case SET_WEATHER_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}
