import { REGISTER_ERROR, REGISTER_SUCCESS, GET_USER, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../../types/Index';

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false,
            };
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false,
            };

        case LOGOUT:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: false,
                message: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};
