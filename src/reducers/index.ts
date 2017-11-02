// Set up your root reducer here...
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import movies from './MoviesReducer'
import todos from './TodosReducer'
import pictures from './PicturesReducer'

export type Action = {
  type: string,
  payload?: any,
  error?: string
}
const rootReducer = combineReducers({
  movies,
  pictures,
  todos,
  routing: routerReducer
});

export default rootReducer;
