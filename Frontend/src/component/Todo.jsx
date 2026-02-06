import React, { useEffect, useState } from 'react'
import axios from "axios"

const Todo = () => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]
    );
    const [editIndex, setEditIndex] = useState(null);
    const fetchData=async(req,res)=>{
     const responce=  await axios.get(`http://localhost:3000/api/todo/`)
     setTodo(responce.data)
    }
     useEffect(()=>{
        fetchData()
     },[])

    const handleAddOrUpdate = () => {
        if (task.trim() === "") return;

        if (editIndex !== null) {
            const updated = [...todo];
            updated[editIndex].task = task;
            setTodo(updated);
            setEditIndex(null);
        } else {
            setTodo([...todo, { task, completed: false }]);
        }
        setTask("");
    };

    const handleDelete = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    const handleToggleComplete = (index) => {
        const updated = [...todo];
        updated[index].completed = !updated[index].completed;
        setTodo(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddOrUpdate();
    };

    return (
        <div style={{ maxWidth: "500px", margin: "20px auto" }}>
            <h1>Todo</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="enter the task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ padding: "8px", width: "70%" }}
                />
                <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </form>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {todo.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "6px"
                        }}
                    >
                        <span
                            onClick={() => handleToggleComplete(index)}
                            style={{
                                textDecoration: item.completed ? "line-through" : "none",
                                cursor: "pointer",
                                flex: 1
                            }}
                        >
                            {item.task}
                        </span>

                        <button
                            onClick={() => {
                                setTask(item.task);
                                setEditIndex(index);
                            }}
                            style={{ marginRight: "6px" }}
                        >
                            Edit
                        </button>

                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo 