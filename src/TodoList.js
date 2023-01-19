import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {v4 as uuidv4} from 'uuid';

const TodoList = () => {
    const INITIAL_STATE = [
        // {
        // text: 'wake up',
        // complete: true,
        // idx: uuidv4()
        // },
        // {
        // text: 'get dressed',
        // complete: false,
        // idx: uuidv4()
        // },
        // {
        // text: 'walk dog',
        // complete: false,
        // idx: uuidv4()
        // },
        // {
        // text: 'eat breakfast',
        // complete: false,
        // idx: uuidv4()
        // }
    ];

    const [todos, setTodos] = useState(INITIAL_STATE);

    const removeTodo = (idx) => {
        setTodos(todos => {
            return todos.filter(t => t.idx !== idx);
        })
    }

    const markComplete = (idx) => {
        setTodos(todos => {
            let toDoCopy = todos.filter(t => t.idx === idx);
            toDoCopy[0].complete = true;
            return [...todos]
        })
    }

    const addTodo = (text) => {
        let newTask = {
            text: text,
            complete: false,
            idx: uuidv4()
        }
        setTodos(todos => {
            let toDosCopy = [...todos, newTask]
            return toDosCopy
        })
    }

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            <h2>Current To Do's</h2>
            {todos.map(t=> (
                <Todo key={t.idx} text={t.text} idx={t.idx} removeTodo={removeTodo} complete={t.complete} markComplete={markComplete}/>
            ))}
        </div>
    )
}

export default TodoList;