import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';

const Sidebar = () => {
    return (
        <aside>
            <h1>
                MERN <span>Tasks</span>
            </h1>
            <NewProject></NewProject>
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ProjectsList></ProjectsList>
            </div>
        </aside>
    );
};

export default Sidebar;
