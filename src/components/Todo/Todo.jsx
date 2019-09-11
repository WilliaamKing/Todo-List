import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {connect} from 'react-redux';
import {addTask, removeTask, changeStatus} from '../../actions/actionCreator';
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

        if(taskTest.length > 3){
            addTask(new Date().getTime(), taskTest, false);
            setTaskTest('');

            document.getElementById('addInput').value = ' ';
        }
    }

    const addTask = ({key}) =>{
        if(key === 'Enter')
            handleButtonClick();
    }

    return (
        <div className = 'todo'>
            <div className = 'content'>
                <h2>You must do it</h2>

                <div className = 'inputs'>
                    <Input id='addInput' placeholder='Write what you must do' onKeyPress  = {addTask} onChange = {handleInputChange}/>
                    <Button onClick = {handleButtonClick} type="primary" className = 'addButton'>Add</Button>
                </div>

                <div className = 'data'>
                    {props.tasks.map ((el,index) => <Section number = {index} name = {el.name} status = {el.status}
                                                            removeTask = {props.removeTask} changeStatus = {props.changeStatus} 
                                                            id = {el.number}/>)}
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default connect (state => ({
    tasks: state.tasks,
}),{addTask, changeStatus, removeTask})(Todo);