import { DISLIKE_MOVIE_SUCCESS, LIKE_MOVIE_SUCCESS, REMOVE_DISLIKE_MOVIE_SUCCESS, REMOVE_LIKE_MOVIE_SUCCESS } from "../types";

export const likeMovieSuccess = (data) => {
  return {
    type: LIKE_MOVIE_SUCCESS,
    payload: data,
  };
};
export const dislikeMovieSuccess = (data) => {
  return {
    type: DISLIKE_MOVIE_SUCCESS,
    payload: data,
  };
};

export const removeLikeMovieSuccess = (data) => {
  return {
    type: REMOVE_LIKE_MOVIE_SUCCESS,
    payload: data,
  };
};
export const removeDisLikeMovieSuccess = (data) => {
  return {
    type: REMOVE_DISLIKE_MOVIE_SUCCESS,
    payload: data,
  };
};

export const DisLikeMovie = (movie) => {
  return (dispatch) => {
  dispatch(dislikeMovieSuccess(movie));
    return Promise.resolve()
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.message;
        errorPayload["stack"] = error.stack;

      /*  dispatch(fetchMoviesError(errorPayload));*/
      return Promise.reject();
     
      });
  };
};

export const LikeMovie = (movie) => {
  return (dispatch) => {
  dispatch(likeMovieSuccess(movie));
    return Promise.resolve()
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.message;
        errorPayload["stack"] = error.stack;

      /*  dispatch(fetchMoviesError(errorPayload));*/
      return Promise.reject();
     
      });
  };
};

export const RemoveLikeMovie = (movie) => {
  return (dispatch) => {
  dispatch(removeLikeMovieSuccess(movie));
    return Promise.resolve()
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.message;
        errorPayload["stack"] = error.stack;

      /*  dispatch(fetchMoviesError(errorPayload));*/
      return Promise.reject();
     
      });
  };
};

export const RemoveDisLikeMovie = (movie) => {
  return (dispatch) => {
  dispatch(removeDisLikeMovieSuccess(movie));
    return Promise.resolve()
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.message;
        errorPayload["stack"] = error.stack;

      /*  dispatch(fetchMoviesError(errorPayload));*/
      return Promise.reject();
     
      });
  };
};
