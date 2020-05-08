import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR,
} from '../../types/Index';
import AxiosClient from '../../config/axios';
import EApi from '../../enums/api';

const ProjectState = (props) => {
    const initialState = {
        form: false,
        projects: [],
        errorForm: false,
        project: null,
        message: null,
    };

    // Dispatch in order to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Serie of functions for CRUD
    /**
     * Show new project form
     */
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT,
        });
    };

    /**
     * Get all projects
     */
    const getProjects = async () => {
        try {
            const response = await AxiosClient.get(EApi.getProjects);

            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects,
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error',
            };

            dispatch({
                type: PROJECT_ERROR,
                payload: alert,
            });
        }
    };

    /**
     * Add a project
     * @param {*} project
     */
    const addProject = async (project) => {
        try {
            const response = await AxiosClient.post(EApi.postCreateProject, project);
            console.log(response);

            // Insert project in state
            dispatch({
                type: ADD_PROJECT,
                payload: response.data,
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error',
            };

            dispatch({
                type: PROJECT_ERROR,
                payload: alert,
            });
        }
    };

    /**
     * Show error
     */
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM,
        });
    };

    /**
     * Select actual project that user selected
     * @param {*} project
     */
    const actualProject = (projectId) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId,
        });
    };

    /**
     * Delete a project
     * @param {*} projectId
     */
    const deleteProject = async (projectId) => {
        try {
            await AxiosClient.delete(`${EApi.deleteProject}/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId,
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error',
            };

            dispatch({
                type: PROJECT_ERROR,
                payload: alert,
            });
        }
    };

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorForm: state.errorForm,
                project: state.project,
                message: state.message,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject,
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
};

export default ProjectState;
