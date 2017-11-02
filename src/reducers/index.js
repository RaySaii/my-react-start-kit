// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './MoviesReducer';
import todos from './TodosReducer';
import pictures from './PicturesReducer';
var rootReducer = combineReducers({
    movies: movies,
    pictures: pictures,
    todos: todos,
    routing: routerReducer
});
export default rootReducer;
//# sourceMappingURL=index.js.map