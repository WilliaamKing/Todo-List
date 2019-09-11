import React, {useState}from 'react';
import {Button, Select } from 'antd';
import './style.css';

const {Option} = Select;

const Section = ({number,name}) =>{
    const [status, setStatus] = useState(false);

    const resetStatus = (value) =>{
        setStatus((value === 'completed')?true: false);
    }

    return(
        <div className = 'actionSection'>
            <div id = 'number'>
                {number + '.'}
            </div>

            <div id='name' style = {{textDecoration: (status)? 'line-through' : 'none'}}>
                {name}
            </div>

            <div id='status'>
                <Select style = {{width: 150}} defaultValue = 'not completed' onChange = {resetStatus}>
                    <Option value= 'completed'>completed</Option>
                    <Option value= 'notCompleted'>not completed</Option>
                </Select>
            </div>

            <div id='actions'>
                <Button type="primary">Delete</Button>
            </div>
        </div>
    );
};

export default Section;