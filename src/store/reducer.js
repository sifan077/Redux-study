const stateData = {
    count: 0
};
const countReducer = (state = stateData, action) => {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 };
        case 'decrease':
            return { count: state.count - 1 };
        case 'assign':
            return { count: action.value }
        default:
            return state;
    }
}

export default countReducer;