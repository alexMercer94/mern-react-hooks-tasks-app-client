import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const TasksForm = () => {
    // Get state from context
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // Get data from task context
    const tasksContext = useContext(TaskContext);
    const { errorTask, taskSelected, addTask, validateTask, getTasks, updateTask, clearTask } = tasksContext;

    // Effect that detects if there's a selected task
    useEffect(() => {
        if (taskSelected !== null) {
            setTask(taskSelected);
        } else {
            setTask({
                name: '',
            });
        }
    }, [taskSelected]);

    // Form's state
    const [task, setTask] = useState({
        name: '',
    });

    // Extract project's name
    const { name } = task;

    // Verify if there is a selected project
    if (!project) return null;

    // Array destructuring in order to extract actual project
    const [actualProject] = project;

    /**
     * Read form's data
     * @param {*} e
     */
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    /**
     * Submit form for to add task
     * @param {*} e
     */
    const onSubmitForm = (e) => {
        e.preventDefault();

        // Validate
        if (name.trim() === '') {
            validateTask();
            return;
        }

        // Verify if user is editing a task or adding
        if (taskSelected === null) {
            // Add new task to task's state
            task.project = actualProject._id;
            addTask(task);
        } else {
            // Update task selected
            updateTask(task);

            // Delete selected task of state
            clearTask();
        }

        // Get and filter of actual project's tasks
        getTasks(actualProject._id);

        // Restart form
        setTask({
            name: '',
        });
    };

    return (
        <div className="formulario">
            <form onSubmit={onSubmitForm}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={taskSelected ? 'Editar tarea' : 'Agregar Tarea'}
                    ></input>
                </div>
            </form>
            {errorTask ? <p className="mensaje error">El nombre de la tarea es obligatorio.</p> : null}
        </div>
    );
};

export default TasksForm;
