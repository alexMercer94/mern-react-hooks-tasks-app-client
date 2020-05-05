import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { REGISTER_ERROR, REGISTER_SUCCESS, GET_USER, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../../types/Index';
import AxiosClient from '../../config/axios';
import EApi from '../../enums/api';
import TokenAuth from '../../config/tokenAuth';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Fuctions

    /**
     * Register user
     * @param {*} payload Request data
     */
    const registerUser = async (payload) => {
        try {
            const response = await AxiosClient.post(EApi.postRegisterUser, payload);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data,
            });

            // Get user
            userAuthenticated();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error',
            };

            dispatch({
                type: REGISTER_ERROR,
                payload: alert,
            });
        }
    };

    /**
     * Get user authenticated
     */
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            TokenAuth(token);
        }

        try {
            const response = await AxiosClient.get(EApi.getUserAutheticated);
            dispatch({
                type: GET_USER,
                payload: response.data.user,
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR,
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
