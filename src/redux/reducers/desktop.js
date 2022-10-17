import { APP_MAXIMIZED } from "../actionTypes";

const initialState = {
  Maximized: 0,
  ShowBottomNav: true,
};

export default function DesktopReducer(state = initialState, action) {
  switch (action.type) {
    case APP_MAXIMIZED:
      return Object.assign({}, state, { Maximized: action.payload });
    default:
      return state;
  }
}
