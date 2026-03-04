import { useState } from "react";
import "./TodoList.css";
import {v4 as uuidv4} from "uuid";

export default function TodoList(){

    let [todo,setTodo] = useState([{
        task: "sample-task",id: uuidv4(), isDone: false,
    }]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
         setTodo((prevTodos) => {
            return[...prevTodos,{task: newTodo,id: uuidv4(),isDone: false}]
         });
         setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
      setTodo(todo.filter((todo) => todo.id != id));
    }

    let markAsDone = (id) => {
        setTodo((prevTodos) => {
           return prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        })
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
                        todo.map((todo) => (
                    <li key={todo.id} className="liLists">
                        <span style={todo.isDone ? {textDecorationLine: "line-through",color:"red"} : {}}>
                            {todo.task}
                        </span> &ensp; &ensp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        
                       </li>
                        ))
                    }
            </ul>
        </div>
    );
}