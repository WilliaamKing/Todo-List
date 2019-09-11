import {ADD_TASK} from '../constants';

export const addTask = (number, name) => ({
    type: ADD_TASK,
    number,
    name,
});