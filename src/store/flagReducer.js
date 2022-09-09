const stateData = {
    flag: true
};

const setFlagReducer = (state = stateData, action) => {
    switch (action.type) {
        case "change":
            return {flag: !state.flag};
        default:
            return state;
    }
}

export default setFlagReducer;