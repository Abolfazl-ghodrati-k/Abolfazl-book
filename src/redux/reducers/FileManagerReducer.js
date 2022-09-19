import {
  OPEN_FILE_MANAGER,
  CLOSE_FILE_MANAGER,
  MAXIMIZE_FILE_MANAGER,
  MINIMIZE_FILE_MANAGER,
  OPEN_MUSIC,
  OPEN_DOCUMENTS,
  OPEN_COURSES,
  OPEN_ROCK,
  OPEN_RB,
  OPEN_POP,
  OPEN_RAP,
} from "../actionTypes";

const initialSatate = {
  FileManager_isOpen: false,
  FileManager_isMaximized: false,
  FileManager_isMinimized: false,
  Music_isOpen: false,
  Documents_isOpen: false,
  Course_isOpen: false,
  Rock_isOpen: false,
  RB_isOpen: false,
  RAP_isOpen: false,
  POP_isOpen: false,
};

export default function FileManagerReducer(state = initialSatate, action) {
  switch (action.type) {
    case OPEN_FILE_MANAGER:
      return Object.assign({}, state, { FileManager_isOpen: true });
      break;
    case CLOSE_FILE_MANAGER:
      return Object.assign({}, state, { FileManager_isOpen: false });

    case MAXIMIZE_FILE_MANAGER:
      return Object.assign({}, state, { FileManager_isMaximized: true });

    case MINIMIZE_FILE_MANAGER:
      return Object.assign({}, state, { FileManager_isMinimized: true });

    case OPEN_MUSIC:
      return Object.assign({}, state, {
        Music_isOpen: true,
        Documents_isOpen: false,
        Course_isOpen: false,
      });

    case OPEN_DOCUMENTS:
      return Object.assign({}, state, {
        Documents_isOpen: true,
        Music_isOpen: false,
        Course_isOpen: false,
      });

    case OPEN_COURSES:
      return Object.assign({}, state, {
        Documents_isOpen: false,
        Music_isOpen: false,
        Course_isOpen: true,
      });

    case OPEN_ROCK:
      return Object.assign({}, state, {
        Rock_isOpen: true,
        OPEN_RB: false,
        RAP_isOpen: false,
        POP_isOpen: false,
      });

    case OPEN_RB:
      return Object.assign({}, state, {
        Rock_isOpen: true,
        OPEN_RB: false,
        RAP_isOpen: false,
        POP_isOpen: false,
      });

    case OPEN_POP:
      return Object.assign({}, state, {
        Rock_isOpen: true,
        OPEN_RB: false,
        RAP_isOpen: false,
        POP_isOpen: false,
      });

    case OPEN_RAP:
      return Object.assign({}, state, {
        Rock_isOpen: true,
        OPEN_RB: false,
        RAP_isOpen: false,
        POP_isOpen: false,
      });
    default:
      return state;
  }
}
