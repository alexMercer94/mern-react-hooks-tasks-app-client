import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATE_TASK,
    ACTUAL_TASK,
    UPDATE_TASK,
    CLEAR_TASK
} from '../../types/Index';
import { v4 as uuidv4 } from 'uuid';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: 'Elegir plataforma', state: true, projectId: 1 },
            { id: 2, name: 'Elegir color', state: false, projectId: 2 },
            { id: 3, name: 'Elegir plataformas de pago', state: false, projectId: 3 },
            { id: 4, name: 'Elegir Hosting', state: true, projectId: 4 },
            { id: 5, name: 'Elegir plataforma', state: true, projectId: 1 },
            { id: 6, name: 'Elegir color', state: false, projectId: 2 },
            { id: 7, name: 'Elegir plataformas de pago', state: false, projectId: 3 },
            { id: 8, name: 'Elegir plataforma', state: true, projectId: 4 },
            { id: 9, name: 'Elegir color', state: false, projectId: 2 },
            { id: 10, name: 'Elegir plataformas de pago', state: false, projectId: 1 }
        ],
        projectTasks: null,
        errorTask: false,
        taskSelected: null
    };

    // Create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Create functions

    /**
     * Get project's tasks
     * @param {*} projectId Project ID
     */
    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        });
    };

    /**
     * Add a task to selected project
     * @param {*} task Task to add
     */
    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task
        });
    };

    /**
     * Validate & show an error if necessary
     */
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        });
    };

    /**
     * Delete a task by ID
     * @param {*} taskId Task ID
     */
    const deleteTaskById = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        });
    };

    /**
     * Change task's state to `complete or incomplete`
     * @param {*} task
     */
    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        });
    };

    // Extract actual task for edit
    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        });
    };

    /**
     * Update a selected task
     * @param {*} task
     */
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    };

    /**
     * Delete selected task
     */
    const clearTask = () => {
        dispatch({
            type: CLEAR_TASK
        });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                errorTask: state.errorTask,
                taskSelected: state.taskSelected,
                getTasks,
                addTask,
                validateTask,
                deleteTaskById,
                changeStateTask,
                saveActualTask,
                updateTask,
                clearTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
