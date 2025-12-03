import React, { useState } from "react";
 import './index.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["eat breakfast","take a shower", "walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handeleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
        setTasks([...tasks,newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }

    }

    return(
        <div className="todo-container">

            <h1>To-Do List</h1>
            
            <div>
                <input
                type="text"
                placeholder="Enetr a task"
                value={newTask}
                onChange={handeleInputChange}/>
                <button
                className="add-button"
                onClick={addTask}>
                    Add
                </button>
                 
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                   

                    <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        Up
                    </button>

                    <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                        Down
                    </button>

                     <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            )}
            </ol>


            </div>
    );
}
export default ToDoList;