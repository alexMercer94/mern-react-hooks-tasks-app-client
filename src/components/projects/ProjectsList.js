import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectsList = () => {
    // Extract projects from initial state of context
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //Get projects when component is load
    useEffect(() => {
        getProjects();
    }, []);

    // Verify if there are projects
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project key={project.id} project={project}></Project>
            ))}
        </ul>
    );
};

export default ProjectsList;
