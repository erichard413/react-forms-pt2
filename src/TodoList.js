import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {v4 as uuidv4} from 'uuid';
import './TodoList.css';



const TodoList = () => {
    
    const [todos, setTodos] = useState(()=> {
        const savedTodos = localStorage.getItem("todos");
        const initialValue = JSON.parse(savedTodos);
        return initialValue || "";
    });

    const removeTodo = (idx) => {
        setTodos(todos => {
            return todos.filter(t => t.idx !== idx);
        })
    }

    const markComplete = (idx) => {
        let copy = [...todos]
        let toDoCopy = copy.filter(t => t.idx === idx);
                toDoCopy[0].complete ? toDoCopy[0].complete = false : toDoCopy[0].complete = true;
        return setTodos(copy);
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

    const editTodo = (idx, text) => {
        setTodos(todos => {
            let todosCopy = [...todos]
            let toDoCopy = todosCopy.filter(t => t.idx === idx);
            toDoCopy[0].text = text;
            return [...todosCopy]
        })
    }

    localStorage.setItem("todos", JSON.stringify(todos));

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            <h2>Current To Do's</h2>
            {todos.map(t=> (
                <Todo key={t.idx} text={t.text} idx={t.idx} removeTodo={removeTodo} complete={t.complete} markComplete={markComplete} editTodo={editTodo}/>
            ))}
        </div>
    )
}

export default TodoList;