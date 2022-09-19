import { END_LOADING, START_LOADING } from '../actionTypes';

export const startLoading = () => {
  return {
    type: START_LOADING
  };
};

export const endLoading = () => {
  return {
    type: END_LOADING
  };
};
