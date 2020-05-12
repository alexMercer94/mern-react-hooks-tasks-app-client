import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const NewAccount = (props) => {
    // Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // Extract values from Auth context
    const authContext = useContext(AuthContext);
    const { registerUser, message, authenticated } = authContext;

    // In case of user is authenticated or registered or is a duplicate registration, reload component
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
        name: '',
        email: '',
        password: '',
        confirm: '',
    });

    // Extract data from user
    const { name, email, password, confirm } = user;
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
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Pass min 6 chars
        if (password.length < 6) {
            showAlert('El password debe ser de almenos 6 caracteres', 'alerta-error');
            return;
        }

        // Verify two password equals
        if (password !== confirm) {
            showAlert('Las contraseñas no coinciden', 'alert-error');
            return;
        }

        // Pass to action
        registerUser({
            name,
            email,
            password,
        });
    };

    return (
        <div className="form-usuario">
            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>
                <form onSubmit={onSubmitForm}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChangeLogin}
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            autoComplete="off"
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
                            autoComplete="new-password"
                            placeholder="Tu Password"
                            onChange={onChangeLogin}
                            value={password}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            autoComplete="new-password"
                            value={confirm}
                            placeholder="Repite tu password"
                            onChange={onChangeLogin}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme"></input>
                    </div>
                </form>
                <Link className="enlace-cuenta" to={'/'}>
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
};

export default NewAccount;
