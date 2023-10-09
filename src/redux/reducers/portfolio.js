import {
  OPEN_PORTFOLIO,
  CLOSE_PORTFOLIO,
  MAXIMIZE_PORTFOLIO,
  MINIMIZE_PORTFOLIO,
} from "../actionTypes";

const initialState = {
  name:"PORTFOLIO",
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
};

export default function PortfolioReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_PORTFOLIO:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_PORTFOLIO:
      return Object.assign({}, state, { isOpen: false });
    case MAXIMIZE_PORTFOLIO:
      return Object.assign({}, state, {
        isMaximized: action.payload,
      });
    case MINIMIZE_PORTFOLIO:
      return Object.assign({}, state, {
        isMinimized: true,
        isMaximized: false,
      });
    default:
      return state;
  }
}
