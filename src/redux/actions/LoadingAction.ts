// @ts-expect-error TS(2305): Module '"../actionTypes"' has no exported member '... Remove this comment to see the full error message
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
