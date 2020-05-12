import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    // Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // Extract values from Auth context
    const authContext = useContext(AuthContext);
    const { login, message, authenticated } = authContext;

    // In case of password or user doesn't exist reload component
    useEffect(() => {
        if (authenticated) {
            props.history.push('/projects');
        }

        if (message) {
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message, authenticated, props.history]);

    // Stae for Login
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    // Extract data from user
    const { email, password } = user;
    const onChangeLogin = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // User Login
    const onSubmitForm = (e) => {
        e.preventDefault();

        // Validate empty fields
        if (email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
        }

        // Pass to action
        login({ email, password });
    };

    return (
        <div className="form-usuario">
            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={onSubmitForm}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChangeLogin}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChangeLogin}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión"></input>
                    </div>
                </form>
                <Link className="enlace-cuenta" to={'/new-account'}>
                    Obtener una cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;
