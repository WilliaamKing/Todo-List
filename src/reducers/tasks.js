import {ADD_TASK, REMOVE_TASK, CHANGE_STATUS} from '../constants';
import {load} from 'redux-localstorage-simple';

let TASKS = load({namespace: 'todo-list'});

if(!TASKS || !TASKS.tasks || !TASKS.tasks.length){
     TASKS = {
         tasks: []
     }
};

const tasks = (state = TASKS.tasks, {type, number, name, completed}) =>{
    switch(type){
        case ADD_TASK:
            return [
                ...state, {
                    number: number,
                    name: name,
                    completed: completed,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(el => el.number !== number); 
        case CHANGE_STATUS:
            return [...state].map(el => {
                el.number === number &&
                    (el.completed = !el.completed);
                return el;
            });
        default:
            return state;
    }
}

export default tasks;