var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export default function movies(state, action) {
    if (state === void 0) { state = { fetching: false, data: [] }; }
    switch (action.type) {
        case 'FETCH_MOVIE_BEGIN':
            return __assign({}, state, { fetching: true });
        case 'FETCH_MOVIE_SUCCESS':
            return __assign({}, state, { fetching: false, data: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=MoviesReducer.js.map