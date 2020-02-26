import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // Stae for Login
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // Extract data from user
    const { email, password } = user;
    const onChangeLogin = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // User Login
    const onSubmitForm = e => {
        e.preventDefault();

        // Validate empty fields

        // Pass to action
    };

    return (
        <div className="form-usuario">
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
