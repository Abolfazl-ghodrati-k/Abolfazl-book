import { FINISH_LOADING, START_LOADING } from '../actionTypes';

const loadingState = {
  loading: false,
  timeout: 0
};

const loadingReducer = (state = loadingState, action) => {
  switch (action.type) {
    case START_LOADING:
      return Object.assign({}, state, { loading: true });
    case FINISH_LOADING:
      return Object.assign({}, state, { loading: false });

    default:
      return state;
  }
};

export default loadingReducer;
