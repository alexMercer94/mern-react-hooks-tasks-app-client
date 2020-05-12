import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    ACTUAL_TASK,
    UPDATE_TASK,
    CLEAR_TASK,
} from '../../types/Index';
import AxiosClient from '../../config/axios';
import EApi from '../../enums/api';

const ID_TASK = ':task_id:';

const TaskState = (props) => {
    const initialState = {
        projectTasks: [],
        errorTask: false,
        taskSelected: null,
    };

    // Create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Create functions

    /**
     * Get project's tasks
     * @param {*} project Project ID
     */
    const getTasks = async (project) => {
        try {
            const response = await AxiosClient.get(EApi.getTasks, { params: { project } });

            dispatch({
                type: PROJECT_TASKS,
                payload: response.data.tasks,
            });
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * Add a task to selected project
     * @param {*} task Task to add
     */
    const addTask = async (task) => {
        try {
            const response = await AxiosClient.post(EApi.postAddTask, task);
            dispatch({
                type: ADD_TASK,
                payload: response.data.task,
            });
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * Update a selected task
     * @param {*} task
     */
    const updateTask = async (task) => {
        try {
            const response = await AxiosClient.put(EApi.updateTask.replace(ID_TASK, task._id), task);
            dispatch({
                type: UPDATE_TASK,
                payload: response.data.task,
            });
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * Validate & show an error if necessary
     */
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK,
        });
    };

    /**
     * Delete a task by ID
     * @param {*} taskId Task ID
     * @param {*} actualProjectId Actual project ID selected
     */
    const deleteTaskById = async (taskId, actualProjectId) => {
        try {
            await AxiosClient.delete(EApi.deleteTask.replace(ID_TASK, taskId), {
                params: { project: actualProjectId },
            });

            dispatch({
                type: DELETE_TASK,
                payload: taskId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Extract actual task for edit
    const saveActualTask = (task) => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task,
        });
    };

    /**
     * Delete selected task
     */
    const clearTask = () => {
        dispatch({
            type: CLEAR_TASK,
        });
    };

    return (
        <TaskContext.Provider
            value={{
                projectTasks: state.projectTasks,
                errorTask: state.errorTask,
                taskSelected: state.taskSelected,
                getTasks,
                addTask,
                validateTask,
                deleteTaskById,
                saveActualTask,
                updateTask,
                clearTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
