import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
    // Stae for Login
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // Extract data from user
    const { name, email, password, confirm } = user;
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

        // Pass min 6 chars

        // Verify two password equals

        // Pass to action
    };

    return (
        <div className="form-usuario">
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
                        ></input>
                    </div>
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
                        <label htmlFor="confirm">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
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
