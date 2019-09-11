import React, {useState} from 'react';
import {Button, Select } from 'antd';
import './style.css';

const {Option} = Select;

const Section = (props) =>{
    const [status, setStatus] = useState(props.status);

    const resetStatus = (value) =>{
        setStatus((value === 'completed')?true: false);
        props.changeStatus(props.id);
    };

    return(
        <div className = 'actionSection'>
            <div id = 'number' style = {{color: (status)? '#b0acac': '#000000'}}>
                {(props.number+1) + '.'}
            </div>

            <div id='name' style = {(status)? {textDecoration:  'line-through', color: '#b0acac'} : {textDecoration: 'none', color: '#000000'}}>
                {props.name}
            </div>

            <div id='status'>
                <Select className = 'select' defaultValue = 'not completed' onChange = {resetStatus}>
                    <Option value= 'notCompleted'>not completed</Option>
                    <Option value= 'completed'>completed</Option>
                </Select>
            </div>

            <div id='actions'>
                <Button type="primary" onClick = {() => props.removeTask(props.id)}>Delete</Button>
            </div>
        </div>
    );
};

export default Section;