import { LOG_IN, LOG_OUT, SET_USER_ERROR } from "../../actionTypes";

const initialState = {
  user: null,
  token: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, {
        user: action.payload.user,
        token: action.payload.token,
      });
    case LOG_OUT:
      return Object.assign({}, state, { user: null, token: null });
    case SET_USER_ERROR:
      return Object.assign({}, state, { error: action.payload.error });
    default:
      return state;
  }
}
