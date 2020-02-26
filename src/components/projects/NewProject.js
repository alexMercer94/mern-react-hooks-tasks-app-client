import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
    // Get form's state
    const projectsContext = useContext(projectContext);
    const { form, errorForm, showForm, addProject, showError } = projectsContext;

    // state
    const [project, setProject] = useState({
        name: ''
    });

    // Extract project's name
    const { name } = project;

    /**
     * Read input's data
     * @param {*} e
     */
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    /**
     * Save project in state
     * @param {*} e
     */
    const onSubmitProject = e => {
        e.preventDefault();

        // Validate project
        if (name === '') {
            showError();
            return;
        }

        // Add to state
        addProject(project);

        // Restart form
        setProject({
            name: ''
        });
    };

    /**
     * Show form
     */
    const onClickForm = () => {
        showForm();
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario" onClick={() => onClickForm()}>
                Nuevo Proyecto
            </button>
            {form ? (
                <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
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
            ) : null}
            {errorForm ? <p className="mensaje error">El nombre es obligatorio</p> : null}
        </Fragment>
    );
};

export default NewProject;
