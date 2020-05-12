/**
 * All available endpoints.
 */
const EApi = {
    // * Auth
    postRegisterUser: '/api/users',
    getUserAutheticated: '/api/auth',
    postLogin: '/api/auth',
    // * Projects
    postCreateProject: 'api/projects',
    getProjects: 'api/projects',
    deleteProject: 'api/projects',
    // * Tasks
    postAddTask: 'api/tasks',
    getTasks: 'api/tasks',
    deleteTask: 'api/tasks/:task_id:',
    updateTask: 'api/tasks/:task_id:',
};

export default EApi;
