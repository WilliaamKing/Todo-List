import {ADD_TASK} from '../constants';

const tasks = (state = [], {type, number, name}) =>{
    switch(type){
        case ADD_TASK:
            return [
                ...state, {
                    number: number,
                    name: name,
                }
            ];
        default:
            return state;
    }
}

export default tasks;