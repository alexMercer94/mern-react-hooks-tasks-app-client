import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

/**
 * High Order Component to protect a component when a user is not authenticated
 * @param {*} param0
 */
const PrivateRoute = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, loading, userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);

    return (
        <Route
            {...props}
            render={(props) =>
                !authenticated && !loading ? <Redirect to="/"></Redirect> : <Component {...props}></Component>
            }
        />
    );
};

export default PrivateRoute;
