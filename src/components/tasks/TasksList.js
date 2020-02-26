import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {
    // Get state from context
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    // Verify if there is a selected project
    if (!project) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring in order to extract actual project
    const [actualProject] = project;

    const projectTasks = [
        { name: 'Elegir plataforma', state: true },
        { name: 'Elegir color', state: false },
        { name: 'Elegir plataformas de pago', state: false },
        { name: 'Elegir Hosting', state: true }
    ];

    const onClickDelete = () => {
        deleteProject(actualProject.id);
    };

    return (
        <Fragment>
            <h2>Proyecto: {actualProject.name}</h2>
            <ul className="listado-tareas">
                {projectTasks.length === 0 ? (
                    <li className="task">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    projectTasks.map(task => <Task task={task}></Task>)
                )}
            </ul>
            <button type="button" className="btn btn-eliminar" onClick={() => onClickDelete()}>
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
};

export default TasksList;
