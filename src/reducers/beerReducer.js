import {
  FETCH_BEERS_START,
  BEERS_FETCHED,
  FETCH_BEERS_ERROR
} from '../actions/types';

const initialState = {
  fetching: false,
  fetched: false,
  beers: [],
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BEERS_START:
      return {
        ...state,
        fetching: true
      }

    case BEERS_FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        beers: action.payload
      }

    case FETCH_BEERS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    default:
      return state;
  }
}