export default function todos(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([
                action.payload
            ]);
        default:
            return state;
    }
}
//# sourceMappingURL=TodosReducer.js.map