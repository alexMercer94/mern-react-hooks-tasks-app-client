import React, { Fragment, useState } from 'react';

const NewProject = () => {
    // state
    const [project, setProject] = useState({
        name: ''
    });

    // Extract project's name
    const { name } = project;

    // Read input's data
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    // Send project
    const onSubmitProject = e => {
        e.preventDefault();

        // Validate project

        // Add to state

        // Restart form
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>
            <form className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="name"
                    value={name}
                    onChange={onChangeProject}
                ></input>
                <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto"></input>
            </form>
        </Fragment>
    );
};

export default NewProject;
