import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {connect} from 'react-redux';
import {addTask, removeTask, changeStatus, changeFilter} from '../../actions/actionCreator';
import Footer from './Footer/Footer'; 
import Section from './Section/Section';
import './style.css';

const BUTTONS = [
    {
        name: 'All',
        id: 'all',
    },
    {
        name: 'Completed',
        id: 'completed',
    },
    {
        name: 'No completed',
        id: 'noCompleted',
    }
];

const Todo = (props) =>{
    const [taskTest, setTaskTest] = useState('');
    const handleInputChange = ({target: {value}}) =>{
        setTaskTest(value);
    }

    const handleButtonClick = () =>{
        const {addTask} = props;

        if(taskTest.length > 3){
            addTask(new Date().getTime(), taskTest, false);
            setTaskTest('');
        }
    }

    const filterTasks = (tasks, activeFilter) =>{
        switch(activeFilter){
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'noCompleted':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        };
    };

    const addTask = ({key}) =>{
        if(key === 'Enter')
            handleButtonClick();
    }

    return (
        <div className = 'todo'>
            <div className = 'content'>
                <h2>You must do it</h2>

                <div className = 'inputs'>
                    <Input placeholder='Write what you must do' value = {taskTest} onKeyPress  = {addTask} onChange = {handleInputChange}/>
                    <Button onClick = {handleButtonClick} type="primary" className = 'addButton'>Add</Button>
                </div>

                <div className = 'data'>
                    {filterTasks(props.tasks, props.filters).map ((el,index) => <Section number = {index} name = {el.name} status = {el.completed}
                                                            removeTask = {props.removeTask} changeStatus = {props.changeStatus} 
                                                            id = {el.number}/>)}
                </div>
            </div>

            <div className = 'filter'>
                {BUTTONS.map(el => <p onClick = {() => props.changeFilter(el.id)}>{el.name}</p>)}
            </div>
            
            <Footer />
        </div>
    );
};

export default connect (state => ({
    tasks: state.tasks,
    filters: state.filters,
}),{addTask, changeStatus, removeTask, changeFilter})(Todo);