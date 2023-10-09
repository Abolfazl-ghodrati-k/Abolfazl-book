import {
  OPEN_SETTING,
  CLOSE_SETTING,
  ORDER_SETTING,
  MINIMIZE_SETTING,
  MAXIMIZE_SETTING,
  RESIZE_SETTING,
  CHANGE_BACKGROUND,
  PICK_COLOR,
  SUBMIT_CHANGES,
  CHANGE_IMAGE
} from "../actionTypes";

const initialState = {
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  order: null,
  color: "",
  image: null
};

export default function SettingReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SETTING:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_SETTING:
      return Object.assign({}, state, { isOpen: false });
    case ORDER_SETTING:
      return Object.assign({}, state, { order: action.payload });
    case MAXIMIZE_SETTING:
      return Object.assign({}, state, {
        isMaximized: true,
      });
    case MINIMIZE_SETTING:
      return Object.assign({}, state, {
        isMinimized: true,
      });
    case RESIZE_SETTING:
      return Object.assign({}, state, {
        isMinimized: action.payload.minimized,
        isMaximized: action.payload.maximized,
      });
    case PICK_COLOR:
      return Object.assign({}, state, {
        color: action.payload,
      });
    case CHANGE_IMAGE:
      return Object.assign({}, state, {
        image: action.payload
      })
    default:
      return state;
  }
}
