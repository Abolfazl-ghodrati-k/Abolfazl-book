import { SET_CITY, SET_WEATHER_DATA, SET_WEATHER_ERROR } from "../actionTypes";

const initialState = {
  city: "",
  data: null,
  error: null
};

export default function WeatherReducer(state = initialState, action) {
  switch (action.type) {
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
