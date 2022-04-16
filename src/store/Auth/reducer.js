import { initialAuthState, PERFORM_LOGIN_SUCCESS, PERFORM_LOGIN_FAILED, PERFORM_LOGIN_LOADING } from "./action";


export const authReducer = (state = initialAuthState, action) => {
    console.log(action)
    switch (action.type) {
        case PERFORM_LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: undefined,
                user: action.payload.user,
                token: action.payload.token,
            };
        case PERFORM_LOGIN_FAILED: 
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case PERFORM_LOGIN_LOADING: 
            return {
                ...state,
                fetching: true
            }
        default:
            return state;
    }
};