import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TasksList = () => {
    // Get state from context
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    // Get data from task context
    const tasksContext = useContext(TaskContext);
    const { projectTasks } = tasksContext;

    // Verify if there is a selected project
    if (!project) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring in order to extract actual project
    const [actualProject] = project;

    const onClickDelete = () => {
        deleteProject(actualProject._id);
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
                    <TransitionGroup>
                        {projectTasks.map((task) => (
                            <CSSTransition key={task.id} timeout={200} classNames="tarea">
                                <Task task={task}></Task>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ul>
            <button type="button" className="btn btn-eliminar" onClick={() => onClickDelete()}>
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
};

export default TasksList;
