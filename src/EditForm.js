import React, {useState} from "react";

const EditForm =({editTodo, idx, task, showForm})=> {
    const initialState = {
        text: {task}
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
        editTodo(idx, text);
        setFormData(text);
        showForm();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Task: </label>
                <input 
                name = "text"
                id="text"
                type="text" 
                placeholder={task}
                onChange={handleChange} 
            />
            <button>Edit</button>
        </form>
    )
}

export default EditForm;