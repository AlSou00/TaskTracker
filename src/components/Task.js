import React from 'react';


import TaskOne from './TaskOne'
const Task = (props) => {
    return (
        <>
            {props.tasks.map((task)=>(<TaskOne key={task.id} task={task} onDelete={props.onDelete}onToggle={props.onToggle}/>))}
        </>
    )
}

export default Task
