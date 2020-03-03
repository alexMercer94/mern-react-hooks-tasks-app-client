import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {
    // Get state from context
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // Get data from task context
    const tasksContext = useContext(TaskContext);
    const { getTasks, deleteTaskById, changeStateTask, saveActualTask, clearTask } = tasksContext;

    // Extract actual project from context
    const [proyectActual] = project;

    /**
     * Delete task when button is clicked
     * @param {*} id
     */
    const deleteTask = id => {
        deleteTaskById(id);
        clearTask();
        getTasks(proyectActual.id);
    };

    /**
     * Change task's state
     * @param {*} task
     */
    const changeState = task => {
        if (task.state) {
            task.state = false;
        } else {
            task.state = true;
        }

        changeStateTask(task);
    };

    /**
     * Select a task for edit
     * @param {*} task
     */
    const selectTask = task => {
        saveActualTask(task);
    };

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button type="button" className="completo" onClick={() => changeState(task)}>
                        Completo
                    </button>
                ) : (
                    <button type="button" className="incompleto" onClick={() => changeState(task)}>
                        Incompleto
                    </button>
                )}
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>
                    Editar
                </button>
                <button type="button" className="btn btn-secundario" onClick={() => deleteTask(task.id)}>
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Task;
