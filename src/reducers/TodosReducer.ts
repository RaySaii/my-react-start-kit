import { Action } from './index';

export default function todos(state: any[] = [], action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}
