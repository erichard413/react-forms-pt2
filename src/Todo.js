import React from 'react';

const Todo = ({text, idx, removeTodo, markComplete, complete}) => {
    let style = complete ? {textDecoration: 'line-through'} : null
    return (
        <div className="Todo">
            <p style={style}>{text}</p>
            <span role="removeTodo" onClick={()=> removeTodo(idx)}>❌</span>
            <span style={{fontColor: 'green'}} role="markComplete" onClick={()=> markComplete(idx)}>✔️</span>
        </div>
    )
}

export default Todo;