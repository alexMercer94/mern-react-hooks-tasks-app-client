import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    ACTUAL_TASK,
    UPDATE_TASK,
    CLEAR_TASK,
} from '../../types/Index';

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: action.payload,
            };

        case ADD_TASK:
            return {
                ...state,
                projectTasks: [action.payload, ...state.projectTasks],
                errorTask: false,
            };

        case VALIDATE_TASK:
            return {
                ...state,
                errorTask: true,
            };

        case DELETE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.filter((task) => task._id !== action.payload),
            };
        case UPDATE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };

        case ACTUAL_TASK:
            return {
                ...state,
                taskSelected: action.payload,
            };

        case CLEAR_TASK:
            return {
                ...state,
                taskSelected: null,
            };

        default:
            return state;
    }
};
