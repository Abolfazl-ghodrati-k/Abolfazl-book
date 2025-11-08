const initialState = {
  order: 6,
};

export default function OrderReducer (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_ORDER":
      return Object.assign({}, state, { order: action.payload });
    default:
      return state;
  }
}
