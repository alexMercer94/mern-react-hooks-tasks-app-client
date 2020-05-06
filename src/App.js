import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/tokenAuth';

// Check if exists Token
const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}

function App() {
    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                    <AuthState>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Login}></Route>
                                <Route exact path="/new-account" component={NewAccount}></Route>
                                <Route exact path="/projects" component={Projects}></Route>
                            </Switch>
                        </Router>
                    </AuthState>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
