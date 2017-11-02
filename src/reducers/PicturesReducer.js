var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export default function pictures(state, action) {
    if (state === void 0) { state = { fetching: false, data: [] }; }
    switch (action.type) {
        case 'FETCH_PIC_BEGIN':
            return __assign({}, state, { fetching: true });
        case 'FETCH_PIC_SUCCESS':
            return __assign({}, state, { data: action.payload, fetching: false });
        default:
            return state;
    }
}
//# sourceMappingURL=PicturesReducer.js.map