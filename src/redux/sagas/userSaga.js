import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_USER, FETCH_USER } from ".";
import { FINISH_LOADING, LOG_IN, SET_USER_ERROR, START_LOADING } from "../actionTypes";
import { signUp, authenticate } from "../../services/api/user";

function* handleSignUp(action) {
  const { email, password } = action.payload;
  yield put({ type: START_LOADING });
  const {
    data: { user, token },
    error,
  } = yield call(signUp, { email, password });

  yield put({ type: FINISH_LOADING });

  if (error) {
    yield put({ type: SET_USER_ERROR, payload: { error } });
    return;
  }

  if (token) {
    yield put({ type: LOG_IN, payload: { user, token } });
  }
}

function* handleAuth(action) {
  const { token } = action.payload;
  yield put({ type: START_LOADING });
  const {
    data,
    error,
  } = yield call(authenticate, { token });

  yield put({ type: FINISH_LOADING });

  if (error) {
    yield put({ type: SET_USER_ERROR, payload: { error } });
    return;
  }

  if (data) {
    yield put({ type: LOG_IN, payload: { user: data.user, token } });
  }
}

export function* user_saga() {
  yield takeEvery(ADD_USER, handleSignUp);
  yield takeEvery(FETCH_USER, handleAuth);
}
