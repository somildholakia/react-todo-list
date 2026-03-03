import { useState } from "react";
import "./TodoList.css";
import {v4 as uuidv4} from "uuid";

export default function TodoList(){

    let [todo,setTodo] = useState([{
        task: "sample-task",id: uuidv4()
    }]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
         setTodo((prevTodos) => {
            return[...prevTodos,{task: newTodo,id: uuidv4()}]
         });
         setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
      setTodo(todo.filter((todo) => todo.id != id));
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
                       return <li key={todo.id} className="liLists">
                        <span>
                            {todo.task}
                        </span> &ensp; &ensp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        
                       </li>
                     })
                    }
            </ul>
        </div>
    );
}