import {ADD_TASK, REMOVE_TASK, CHANGE_STATUS, CHANGE_FILTER} from '../constants';

export const addTask = (number, name, completed) => ({
    type: ADD_TASK,
    number,
    name,
    completed,
});

export const removeTask = number =>({
    type: REMOVE_TASK,
    number,
});

export const changeStatus = number =>({
    type: CHANGE_STATUS,
    number,
});

export const changeFilter = activeFilter =>({
    type: CHANGE_FILTER,
    activeFilter,
});