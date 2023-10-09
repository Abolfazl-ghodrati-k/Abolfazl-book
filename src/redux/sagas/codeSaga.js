import { call, put, takeEvery } from "redux-saga/effects";
import {
  FINISH_LOADING,
  SET_CODE_ERROR,
  START_LOADING,
  UPDATE_ROOMS,
} from "../actionTypes";
import { createRoom, fetchRooms, updateRooms } from "../../services/api/room";
import { CREATE_ROOM, FETCH_ROOMS, UPDATE_ROOMS_STATE } from ".";

function* handleFetchRooms(action) {
  const { token } = action.payload;

  yield put({ type: START_LOADING });
  const { data, error } = yield call(fetchRooms, { token });

  if (error) {
    yield put({ type: SET_CODE_ERROR, payload: { error } });
    return;
  }

  if (data) {
    yield put({ type: UPDATE_ROOMS, payload: { rooms: data.rooms } });
  }

  yield put({ type: FINISH_LOADING });
}

/**
 *
 * @param {
 *   users: {
 *   role: string,
 *   email: string
 * },
 * language: string,
 * code: string
 * }
 */

function* handleCreateRoom(action) {
  const { token, users, language, code } = action.payload;
  yield put({ type: START_LOADING });
  const {
    data: { rooms },
    error,
  } = yield call(createRoom, { token, users, language, code });

  yield put({ type: FINISH_LOADING });

  if (error) {
    yield put({ type: SET_CODE_ERROR, payload: { error } });
    return;
  }

  if (token) {
    yield put({ type: UPDATE_ROOMS, payload: { rooms } });
  }
}

/**
 *
 * @param {
 *   updates: Array of
 *    {
 *       id: string
 *       type: "DELETE_ROOM" | "UPDATE_USER" | "UPDATE_CODE"
 *       data: {
 *         update user ->
 *            email: string
 *            role: 'visitor' | 'editor' | 'owner'
 *        update code ->
 *            code: string
 *      }
 *    }
 * }
 */

function* handleUpdateRoom(action) {
  const { updates, token } = action.payload;
  yield put({ type: START_LOADING });
  const {
    data: { rooms },
    error,
  } = yield call(updateRooms, { token, updates });

  yield put({ type: FINISH_LOADING });

  if (error) {
    yield put({ type: SET_CODE_ERROR, payload: { error } });
    return;
  }

  if (token) {
    yield put({ type: UPDATE_ROOMS, payload: { rooms } });
  }
}

export function* code_saga() {
  yield takeEvery(FETCH_ROOMS, handleFetchRooms);
  yield takeEvery(CREATE_ROOM, handleCreateRoom);
  yield takeEvery(UPDATE_ROOMS_STATE, handleUpdateRoom);
}
