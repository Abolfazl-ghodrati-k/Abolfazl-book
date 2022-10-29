import { OPEN_SHUT_DOWN, CLOSE_SHUT_DOWN } from "../actionTypes";

const initialState = {
  isOpen: false,
};

export default function ShutDownReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SHUT_DOWN:
      return Object.assign({}, state, { isOpen: true });

    case CLOSE_SHUT_DOWN:
      return Object.assign({}, state, { isOpen: false });
    default:
      return state;
  }
}
