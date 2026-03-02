import { useState } from "react";

export default function TodoList(){

    let [todo,setTodo] = useState(["Somil","ritik"]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
         
    }

    return(
        <div>
            <input placeholder="Add a Task" value={newTodo}></input> &ensp;
            <button>Add Task</button>
            &ensp; &ensp; &ensp;

            <h2>Todo List</h2>
            <ul>
                    {
                        todo.map((todo) => {
                       return <li>{todo}</li>
})
                    }
            </ul>
        </div>
    );
}