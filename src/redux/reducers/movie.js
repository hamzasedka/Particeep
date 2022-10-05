import { initState } from '../initialState';
import {
  DISLIKE_MOVIE_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_SUCCESS,
  LIKE_MOVIE_SUCCESS,
  REMOVE_DISLIKE_MOVIE_SUCCESS,
  REMOVE_LIKE_MOVIE_SUCCESS,
  UPDATE_MOVIES
} from '../types';
const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };
    case FETCH_MOVIES_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_MOVIES_ERROR:
      return { ...state, error: action.payload };
    case LIKE_MOVIE_SUCCESS:
      return { ...state };
    case UPDATE_MOVIES:
      return { ...state, movies: action.payload };
    case DISLIKE_MOVIE_SUCCESS:
      return { ...state };
    case REMOVE_LIKE_MOVIE_SUCCESS:
      return { ...state };
    case REMOVE_DISLIKE_MOVIE_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};
export default movieReducer;
