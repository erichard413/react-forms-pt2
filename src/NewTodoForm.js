import React, {useState} from "react";
import './NewTodoForm.css';

const NewTodoForm =({addTodo})=> {
    const initialState = {
        text: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const{text} = formData;
        addTodo(text);
        setFormData(initialState);
    }
    
    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
            <label htmlFor="text">Task: </label>
                <input 
                name = "text"
                id="text"
                type="text" 
                placeholder="New Task" 
                value={formData.text} 
                onChange={handleChange} 
            />
            <button>Add Task</button>
        </form>
        </div>
        
    )
}

export default NewTodoForm;