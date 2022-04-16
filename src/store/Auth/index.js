import React, { useState } from 'react';
import { doLogin, initialAuthState } from './action';
import LoginPopup from './popup';
import { authReducer } from "./reducer"

const Store = React.createContext();

export const useAuth = () => React.useContext(Store);

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)
    const login = (credentials) => (doLogin(dispatch, credentials)).then(() => {
        toggleLoginPopup()
    })

    const toggleLoginPopup = () => setIsLoginPopupOpen(!isLoginPopupOpen)

    const operationsAndState = {
        state: authState,
        login,
        toggleLoginPopup
    } 

    return (
        <Store.Provider value={operationsAndState}>
            {children}
            <LoginPopup isOpen={isLoginPopupOpen} onSave={login} onClose={toggleLoginPopup} />
        </Store.Provider>
    );
};