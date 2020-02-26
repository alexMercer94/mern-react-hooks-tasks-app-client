import React, { Fragment } from 'react';
import Task from './Task';

const TasksList = () => {
    const projectTasks = [
        { name: 'Elegir plataforma', state: true },
        { name: 'Elegir color', state: false },
        { name: 'Elegir plataformas de pago', state: false },
        { name: 'Elegir Hosting', state: true }
    ];

    return (
        <Fragment>
            <h2>Proyecto: Virtual Store</h2>
            <ul className="listado-tareas">
                {projectTasks.length === 0 ? (
                    <li className="task">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    projectTasks.map(task => <Task task={task}></Task>)
                )}
            </ul>
            <button type="button" className="btn btn-eliminar">
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
};

export default TasksList;
