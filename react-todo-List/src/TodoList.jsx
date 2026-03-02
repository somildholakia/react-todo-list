import { useState } from "react";
import "./TodoList.css";

export default function TodoList(){

    let [todo,setTodo] = useState(["learn react","learn redux"]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
         setTodo([...todo,newTodo])
         setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return(
        <div>
            <h1>Enter the Task</h1>
            <input className="inputField" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input> &ensp;<br/>
            <button className="inputbtn" onClick={addNewTask}>Add Task</button>
            &ensp; &ensp; &ensp;

            <h2 className="todoLists">Todo List</h2>
            <ul>
                    {
                        todo.map((todo) => {
                       return <li className="liLists">{todo}</li>
                     })
                    }
            </ul>
        </div>
    );
}