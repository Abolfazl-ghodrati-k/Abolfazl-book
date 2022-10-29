import {
  OPEN_CMD,
  CLOSE_CMD,
  MAXIMIZE_CMD,
  MINIMIZE_CMD,
  RESIZE_CMD,
  ORDER_CMD,
  SET_CMD_LOCATION,
} from "../actionTypes";

const initialState = {
  name: "CMD",
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  order: null,
  top: null,
  left: null,
};

export default function CMDReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CMD_LOCATION:
      // console.log("location set",action.payload)
      return Object.assign({}, state, {
        top: action.payload.top,
        left: action.payload.left,
      });
    case OPEN_CMD:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_CMD:
      return Object.assign({}, state, { isOpen: false });
    case MAXIMIZE_CMD:
      return Object.assign({}, state, {
        isMaximized: true,
        isMinimized: false,
      });
    case MINIMIZE_CMD:
      return Object.assign({}, state, {
        isMinimized: true,
      });
    case RESIZE_CMD:
      return Object.assign({}, state, {
        isMaximized: action.payload.maximized,
        isMinimized: action.payload.minimized,
      });
    case ORDER_CMD:
      return Object.assign({}, state, { order: action.payload });
    default:
      return state;
  }
}
