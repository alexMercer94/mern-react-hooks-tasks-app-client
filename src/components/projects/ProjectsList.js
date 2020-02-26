import React from 'react';
import Project from './Project';

const ProjectsList = () => {
    const projects = [{ name: 'Virtual Store' }, { name: 'Intranet' }, { name: 'Diseño de Sitio WEB' }];

    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project project={project}></Project>
            ))}
        </ul>
    );
};

export default ProjectsList;
