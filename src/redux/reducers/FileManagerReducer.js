import {
  OPEN_FILE_MANAGER,
  CLOSE_FILE_MANAGER,
  MAXIMIZE_FILE_MANAGER,
  MINIMIZE_FILE_MANAGER,
  RESIZE_FILE_MANAGER,
  OPEN_MUSIC,
  ORDER_FILE_MANAGER,
  CLOSE_MUSIC,
  CONTROLL_MUSIC,
  SET_PLAYING_MUSIC,
} from "../actionTypes";

const initialSatate = {
  name: "FILE_MANAGER",
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  Music_isOpen: false,
  Documents_isOpen: false,
  Course_isOpen: false,
  Rock_isOpen: false,
  RB_isOpen: false,
  RAP_isOpen: false,
  POP_isOpen: false,
  isPlaying: false,
  playingSrc: "",
  playingTitle: "",
  playingSongs: null,
  order: null,
};

export default function FileManagerReducer(state = initialSatate, action) {
  switch (action.type) {
    case OPEN_FILE_MANAGER:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_FILE_MANAGER:
      return Object.assign({}, state, { isOpen: false });
    case MAXIMIZE_FILE_MANAGER:
      return Object.assign({}, state, { isMaximized: true });
    case MINIMIZE_FILE_MANAGER:
      return Object.assign({}, state, {
        isMinimized: true,
      });
    case RESIZE_FILE_MANAGER:
      return Object.assign({}, state, {
        isMinimized: action.payload.minimized,
        isMaximized: action.payload.maximized
      });
    case ORDER_FILE_MANAGER:
      return Object.assign({}, state, { order: action.payload });
    case OPEN_MUSIC:
      return Object.assign({}, state, {
        Music_isOpen: true,
      });
    case CLOSE_MUSIC:
      return Object.assign({}, state, {
        Music_isOpen: false,
      });
    case CONTROLL_MUSIC:
      return Object.assign({}, state, {
        isPlaying: action.payload,
      });
    case SET_PLAYING_MUSIC:
      return Object.assign({}, state, {
        playingSrc: action.payload.Src,
        playingTitle: action.payload.Title,
      });
    default:
      return state;
  }
}
