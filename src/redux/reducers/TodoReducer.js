import {
  OPEN_TODO,
  CLOSE_TODO,
  MAXIMIZE_TODO,
  MINIMIZE_TODO,
  ORDER_TODO,
  RESIZE_TODO,
  UPDATE_TODO,
} from "../actionTypes";

const initialState = {
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  todos: null,
  order: null,
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_TODO:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_TODO:
      return Object.assign({}, state, { isOpen: false });
    case MINIMIZE_TODO:
      return Object.assign({}, state, {
        isMinimized: true,
      });
    case MAXIMIZE_TODO:
      return Object.assign({}, state, {
        isMaximized: true,
        isMinimized: false,
      });
    case RESIZE_TODO:
      return Object.assign({}, state, {
        isMaximized: action.payload.maximized,
        isMinimized: action.payload.minimized,
      });
    case ORDER_TODO:
      return Object.assign({}, state, { order: action.payload });
    case UPDATE_TODO:
      return Object.assign({}, state, { todos: action.payload });
    default:
      return state;
  }
}
