import { movies$ } from '../../utils/movies';
import {
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_SUCCESS,
  UPDATE_MOVIES
} from '../types';

export const fetchMoviesSuccess = (data) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: data
  };
};
export const fetchMoviesError = (data) => {
  return {
    type: FETCH_MOVIES_ERROR,
    payload: data
  };
};
export const fetchMoviesLoading = (data) => {
  return {
    type: FETCH_MOVIES_LOADING,
    payload: data
  };
};

export const updateMoviesState = (data) => {
  return {
    type: UPDATE_MOVIES,
    payload: data
  };
};

export const fetchMovies = () => {
  let isLoading = true;
  return (dispatch) => {
    dispatch(fetchMoviesLoading(isLoading));
    return movies$
      .then((response) => {
        dispatch(fetchMoviesSuccess(response));
        isLoading = false;
        dispatch(fetchMoviesLoading(isLoading));
      })
      .catch((error) => {
        const errorPayload = {};
        errorPayload['message'] = error.message;
        errorPayload['stack'] = error.stack;
        dispatch(fetchMoviesError(errorPayload));
        isLoading = false;
        dispatch(fetchMoviesLoading(isLoading));
      });
  };
};
