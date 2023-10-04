import {
  OPEN_CODE,
  CLOSE_CODE,
  MAXIMIZE_CODE,
  MINIMIZE_CODE,
  RESIZE_CODE,
  ORDER_CODE,
} from "../actionTypes";

const initialState = {
  name: "CODE",
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  order: null,
  code: "",
  language: "",
};

export default function CodeReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CODE:
      return Object.assign({}, state, { isOpen: true });

    case CLOSE_CODE:
      return Object.assign({}, state, { isOpen: false });

    case MAXIMIZE_CODE:
      return Object.assign({}, state, {
        isMaximized: true,
        isMinimized: false,
      });

    case MINIMIZE_CODE:
      return Object.assign({}, state, {
        isMinimized: true,
      });

    case RESIZE_CODE:
      return Object.assign({}, state, {
        isMaximized: action.payload.maximized,
        isMinimized: action.payload.minimized,
      });

    case ORDER_CODE:
      return Object.assign({}, state, { order: action.payload });

    default:
      return state;
  }
}
