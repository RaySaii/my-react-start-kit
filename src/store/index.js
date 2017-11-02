import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';
export var history = createHistory();
var sagaMiddleware = createSagaMiddleware();
function configureStoreProd(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var reactRouterMiddleware = routerMiddleware(history);
    var middlewares = [
        // Add other middleware on this line...
        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        sagaMiddleware,
        reactRouterMiddleware,
    ];
    return createStore(rootReducer, initialState, compose(applyMiddleware.apply(void 0, middlewares)));
}
function configureStoreDev(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var reactRouterMiddleware = routerMiddleware(history);
    var middlewares = [
        // Add other middleware on this line...
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),
        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        sagaMiddleware,
        reactRouterMiddleware,
    ];
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    var store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware.apply(void 0, middlewares)));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', function () {
            var nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
var configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
var appStore = configureStore({});
sagaMiddleware.run(rootSaga);
export default appStore;
//# sourceMappingURL=index.js.map