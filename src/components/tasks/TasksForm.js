import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const TasksForm = () => {
    // Get state from context
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // Verify if there is a selected project
    if (!project) return null;

    // Array destructuring in order to extract actual project
    const [actualProject] = project;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre Tarea" name="name"></input>
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default TasksForm;
