import { Action } from './index';

export default function pictures(state: {} = {fetching: false, data: []}, action: Action) {
  switch (action.type) {
    case 'FETCH_PIC_BEGIN':
      return {...state, fetching: true}
    case 'FETCH_PIC_SUCCESS':
      return {...state, data: action.payload, fetching: false}
    default :
      return state
  }
}
