import { APP_MAXIMIZED, OPEN_MODAL } from "../actionTypes";

const initialState = {
  Maximized: 0,
  ShowBottomNav: true,
  Modals: null
};

export default function DesktopReducer(state = initialState, action) {
  switch (action.type) {
    case APP_MAXIMIZED:
      return Object.assign({}, state, { Maximized: action.payload });
    case OPEN_MODAL:
      return Object.assign({}, state, {Modals: action.payload})
    default:
      return state;
  }
}
