import React, { useReducer } from 'react';
import { SHOW_ALERT, HIDE_ALERT } from '../../types/Index';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';

const AlertState = (props) => {
    const initialState = {
        alert: null,
    };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Functions

    /**
     * Show an alert
     * @param {*} msg Alert's message
     * @param {*} category Category
     */
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category,
            },
        });

        // After 5 seconds hide alert
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT,
            });
        }, 5000);
    };

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                showAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
