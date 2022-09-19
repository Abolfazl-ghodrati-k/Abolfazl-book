import {
  OPEN_PORTFOLIO,
  CLOSE_PORTFOLIO,
  MAXIMIZE_PORTFOLIO,
  MINIMIZE_PORTFOLIO,
} from "../actionTypes";

const initialState = {
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
};

export default function PortfolioReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_PORTFOLIO:
      return Object.assign({}, state, { isOpen: true });
      break;
    case CLOSE_PORTFOLIO:
      return Object.assign({}, state, { isOpen: false });
    case MAXIMIZE_PORTFOLIO:
      return Object.assign({}, state, {
        isMaximized: true,
        isMinimized: false,
      });
    case MINIMIZE_PORTFOLIO:
      return Object.assign({}, state, {
        isMinimized: true,
        isMaximized: false,
      });
    default:
      return state;
      break;
  }
}
