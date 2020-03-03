import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectsList = () => {
    // Extract projects from initial state of context
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //Get projects when component is load
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    // Verify if there are projects
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition key={project.id} timeout={200} classNames="proyecto">
                        <Project project={project}></Project>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ProjectsList;
