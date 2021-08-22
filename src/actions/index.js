import { SET_MOVIES, SET_SELECTED_MOVIE, SET_MOVIES_EMPTY, SET_MOVIES_ERROR } from "./types";
import axios from 'axios'
const baseUrl = 'https://www.omdbapi.com/?apikey=a8b95fef'

export const fetchMovies = (page, search) => {
  return async (dispatch) => {
    const config = {
      method: "GET",
      url: `${baseUrl}`,
      params: {
        s: search,
        page: page,
      },
    };

    try {
      dispatch({ type: SET_MOVIES_ERROR , payload: {} });

      const { data = {} } = await axios(config);
      if (data?.Response === 'False' || !data?.Response) {
        dispatch({ type: SET_MOVIES_EMPTY });
        dispatch({ type: SET_MOVIES_ERROR , payload: data });
      } else {
        dispatch({ type: SET_MOVIES, payload: data.Search });
      }
      return data;
    } catch (error) {
      throw error;
    }
  };
};

export const setSelectedMovie = (imdbID) => {
  return async (dispatch) => {
    const config = {
      method: 'GET',
      url: `${baseUrl}`,
      params: {
        i: imdbID,
      },
    };

    try {
      const { data = {} } = await axios(config);
      if (data?.Response === 'False' || !data?.Response) {
        dispatch({ type: SET_MOVIES_ERROR , payload: data });
      }
      dispatch({ type: SET_SELECTED_MOVIE, payload: data });
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export const setMoviesEmpty = () => {
  return async (dispatch) => {
    dispatch({ type: SET_MOVIES_EMPTY });
    return;
  };
};

export const setClearError = () => {
  return async (dispatch) => {
    dispatch({ type: SET_MOVIES_EMPTY });
    dispatch({ type: SET_MOVIES_ERROR , payload: {
      'Error': '',
      'Response': '',
    } });
    return;
  };
};

