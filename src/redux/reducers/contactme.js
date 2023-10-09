import { OPEN_CONTACTME, CLOSE_CONTACTME } from "../actionTypes";

const initialState = {
  isOpen: false,
};

export default function ContactMeReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CONTACTME:
      return Object.assign({}, state, { isOpen: true });
    case CLOSE_CONTACTME:
      return Object.assign({}, state, { isOpen: false });
    default:
        return state
  }
}
