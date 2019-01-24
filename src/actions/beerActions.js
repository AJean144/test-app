import {
  FETCH_BEERS_START,
  BEERS_FETCHED,
  FETCH_BEERS_ERROR
} from './types';

import axios from 'axios';

export const fetchBeers = () => dispatch => {
  dispatch({ type: FETCH_BEERS_START })
  axios.get('https://api.punkapi.com/v2/beers?abv_gt=10&per_page=50')
    .then((beers) => {
      dispatch({
        type: BEERS_FETCHED,
        payload: beers
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_BEERS_ERROR,
        payload: err
      })
    })
} 