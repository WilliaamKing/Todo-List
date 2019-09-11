import {ADD_TASK, REMOVE_TASK, CHANGE_STATUS} from '../constants';

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
})