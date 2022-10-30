import {
  OPEN_SETTING,
  CLOSE_SETTING,
  ORDER_SETTING,
  MINIMIZE_SETTING,
  CHANGE_BACKGROUND,
  PICK_COLOR,
  SUBMIT_CHANGES,
} from "../actionTypes";

const initialState = {
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  order: null,
  color: "",
};

export default function SettingReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SETTING:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_SETTING:
      return Object.assign({}, state, { isOpen: false });
    case ORDER_SETTING:
      return Object.assign({}, state, { order: action.payload });
    case MINIMIZE_SETTING:
      return Object.assign({}, state, {
        isMaximized: action.payload.maximized,
        isMinimized: action.payload.minimized,
      });
    case PICK_COLOR:
      return Object.assign({}, state, {
        color: action.payload,
      });

    default:
      return state;
  }
}
