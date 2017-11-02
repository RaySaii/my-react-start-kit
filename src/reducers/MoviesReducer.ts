import { Action } from './index';

export default function movies(state: {} = {fetching: false, data: []}, action: Action) {
  switch (action.type) {
    case 'FETCH_MOVIE_BEGIN':
      return {...state, fetching: true}
    case 'FETCH_MOVIE_SUCCESS':
      return {...state, fetching: false, data: action.payload}
    default :
      return state
  }
}
