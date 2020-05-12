import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import TasksList from '../tasks/TasksList';
import AuthContext from '../../context/auth/authContext';

const Projects = () => {
    // Extract data from Auth context
    const authContext = useContext(AuthContext);
    const { userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="contenedor-app">
            <Sidebar></Sidebar>
            <div className="seccion-principal">
                <Header></Header>
                <main>
                    <TasksForm></TasksForm>
                    <div className="contenedor-tareas">
                        <TasksList> </TasksList>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;
