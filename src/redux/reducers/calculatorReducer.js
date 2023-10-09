import {
  OPEN_CALCULATOR,
  CLOSE_CALCULATOR,
  ORDER_CALCULATOR,
  RESIZE_CALCULATOR,
  MAXIMIZE_CALCULATOR,
  MINIMIZE_CALCULATOR
} from "../actionTypes";

const initialState = {
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  order: null,
};

export default function CalculatorReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CALCULATOR:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_CALCULATOR:
      return Object.assign({}, state, { isOpen: false });
    case MAXIMIZE_CALCULATOR:
      return Object.assign({}, state, { isMaximized: true });
    case MINIMIZE_CALCULATOR:
      return Object.assign({}, state, {
        isMinimized: true,
      });
    case RESIZE_CALCULATOR:
      return Object.assign({}, state, {
        isMaximized: action.payload.maximized,
        isMinimized: action.payload.minimized,
      });
    case ORDER_CALCULATOR:
      return Object.assign({}, state, { order: action.payload });
    default:
      return state;
  }
}
