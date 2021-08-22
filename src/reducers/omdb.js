/* eslint-disable import/no-anonymous-default-export */
import {
  SET_MOVIES,
  SET_SELECTED_MOVIE,
  SET_MOVIES_EMPTY,
  SET_MOVIES_ERROR,
} from "../actions/types";

const initialState = {
  movies: [],
  searchTerm: '',
  selectedMovie: {},
  errorCode: {
    'Error': '',
    'Response': '',
  },
};

export default function(state = initialState, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_MOVIES:
      return { 
        ...state,
        movies: [...new Set([...state.movies, ...action.payload])],
      }
    case SET_MOVIES_EMPTY:
      return { 
        ...state,
        movies: [],
      }
    case SET_MOVIES_ERROR:
      return { 
        ...state,
        errorCode: action.payload
      }
    case SET_SELECTED_MOVIE:
      return { 
        ...state,
        selectedMovie: action.payload,
      }
    default:
      return state;
  }
}