import React from 'react';


const Todo = (props) => {

    const markCompleted = e => {
        props.toggleCompleted(props.task.id)
    }
    return (
        <div className={`task${props.task.completed ? " completed" : ""}`} onClick={markCompleted}>
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;