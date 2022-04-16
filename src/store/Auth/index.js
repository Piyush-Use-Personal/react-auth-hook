import React from 'react';
import { doLogin, initialAuthState } from './action';
import { authReducer } from "./reducer"

const Store = React.createContext();

export const useAuth = () => React.useContext(Store);

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);

    const login = (credentials) => (doLogin(dispatch, credentials))

    const operationsAndState = {
        state: authState,
        login
    } 

    return (
        <Store.Provider value={operationsAndState}>{children}</Store.Provider>
    );
};