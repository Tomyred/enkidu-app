const initialState = {
    loading: false,
    loaded: false,
    error: false,
    userInfo: null,
    data: [],
};

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCEED":
            return { ...state, userInfo: action.payload };
        case "PUSH_USER_INFO":
            return { ...state, userInfo: action.payload };
        default:
            return state;
    }
};

export { initialState };
export default ListReducer;
