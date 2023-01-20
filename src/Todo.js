import React, {useState} from 'react';
import EditForm from './EditForm';
import './Todo.css';

const Todo = ({text, idx, removeTodo, markComplete, complete, editTodo}) => {
    
    const [isShown, setIsShown] = useState(false);

    const showForm = () => {
        if (isShown === true) {
            setIsShown(false);
        } else {
            setIsShown(true);
        }
    }


    return (
        <div className="Todo">
            <p style={complete ? {textDecoration: 'line-through'} : null}>{text}</p>
            <div className="Todo-btns">
            <span role="removeTodo" onClick={()=> removeTodo(idx)}>❌</span>
            <span style={{color: 'transparent', textShadow: '0 0 green'}} role="markComplete" onClick={()=> markComplete(idx)}>✔️</span>
            <span style={{color: 'transparent', textShadow: '0 0 grey'}} role="showForm" onClick={showForm}>✏️</span>
            </div>
            
            {isShown && <EditForm task={text} idx={idx} editTodo={editTodo} showForm={showForm} />}  
        </div>
    )
}

export default Todo;