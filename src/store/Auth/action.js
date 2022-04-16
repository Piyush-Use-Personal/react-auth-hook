import ServerAuth from "../../service/Auth";

export const PERFORM_LOGIN_SUCCESS = 'APP/LOGIN_SUCCESS';
export const PERFORM_LOGIN_FAILED = 'APP/LOGIN_FAILED';
export const PERFORM_LOGIN_LOADING = 'APP/LOGIN_LOADING';

const backend = new ServerAuth()

export const initialAuthState = {
  user: {},
  token: undefined,
  error: undefined,
  fetching: false
};

export const doLoginSuccess = (payload) => ({
    type: PERFORM_LOGIN_SUCCESS,
    payload,
})
export const doLoginFailed = (payload) => ({
    type: PERFORM_LOGIN_FAILED,
    payload,
})
export const doLoginLoading = () => ({
    type: PERFORM_LOGIN_LOADING,
})

export const doLogin = async (dispatch, { email, password }) => {
    dispatch(doLoginLoading())
    try {
        const response = await backend.getToken(email, password);
        return dispatch(doLoginSuccess(response.data));
    } catch (error) {
        return dispatch(doLoginFailed(error));
    }
}