import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {
    // Get data from state
    const projectsContext = useContext(projectContext);
    const { actualProject } = projectsContext;

    // Get fuction of task context
    const tasksContext = useContext(TaskContext);
    const { getTasks } = tasksContext;

    // Fuction for add project actual
    /**
     * Select a project and setTasks in state
     * @param {*} id
     */
    const selectProject = (id) => {
        // Fixed actual project
        actualProject(id);
        // Filter tasks of selected project
        getTasks(id);
    };

    return (
        <li>
            <button type="button" className="btn btn-blank" onClick={() => selectProject(project._id)}>
                {project.name}
            </button>
        </li>
    );
};

export default Project;
