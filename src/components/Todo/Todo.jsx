import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {connect} from 'react-redux';
import {addTask} from '../../actions/actionCreator';
import Footer from './Footer/Footer'; 
import Section from './Section/Section';
import './style.css';

const Todo = (props) =>{
    const [taskTest, setTaskTest] = useState('');
    const handleInputChange = ({target: {value}}) =>{
        setTaskTest(value);
    }

    const handleButtonClick = () =>{
        const {addTask} = props ;
        addTask(props.tasks.length+1, taskTest);
        setTaskTest('');
    }

    const addTask = ({key}) =>{
        if(taskTest.length > 3 && key === 'Enter'){
            handleButtonClick();
        }
    }


    return (
        <div className = 'todo'>
            <h2>You must do it</h2>

            <div className = 'inputs'>
                <Input id='addInput' placeholder='Write what you must do' onKeyPress  = {addTask} onChange = {handleInputChange}/>
                <Button onClick = {handleButtonClick} type="primary" className = 'addButton'>Add</Button>
            </div>

            <div className = 'data'>
                {props.tasks.map (el => <Section number = {el.number} name = {el.name}/>)}
            </div>

            <Footer />
        </div>
    );
};

export default connect (state => ({
    tasks: state.tasks,
}),{addTask})(Todo);