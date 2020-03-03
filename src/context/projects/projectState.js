import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT
} from '../../types/Index';
import { v4 as uuidv4 } from 'uuid';

const ProjectState = props => {
    const projects = [
        { id: 1, name: 'Virtual Store' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño de Sitio WEB' },
        { id: 4, name: 'MERN' }
    ];

    const initialState = {
        form: false,
        projects: [],
        errorForm: false,
        project: null
    };

    // Dispatch in order to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Serie of functions for CRUD
    /**
     * Show new project form
     */
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    };

    /**
     * Get all projects
     */
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    };

    /**
     * Add a project
     * @param {*} project
     */
    const addProject = project => {
        project.id = uuidv4();

        // Insert project in state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    };

    /**
     * Show error
     */
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        });
    };

    /**
     * Select actual project that user selected
     * @param {*} project
     */
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        });
    };

    /**
     * Delete a project
     * @param {*} projectId
     */
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        });
    };

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorForm: state.errorForm,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
};

export default ProjectState;
