import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from '../../context/alerts/alertContext';

const ProjectsList = () => {
    // Extract projects from initial state of context
    const projectsContext = useContext(projectContext);
    const { message, projects, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //Get projects when component is load
    useEffect(() => {
        // If there an error
        if (message) {
            showAlert(message.msg, message.category);
        }
        getProjects();
        // eslint-disable-next-line
    }, [message]);

    // Verify if there are projects
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

    return (
        <ul className="listado-proyectos">
            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
            <TransitionGroup>
                {projects.map((project) => (
                    <CSSTransition key={project._id} timeout={200} classNames="proyecto">
                        <Project project={project}></Project>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ProjectsList;
