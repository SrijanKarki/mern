import React, { useState } from "react";
const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
  
export default function TodoList() {
    // onchange
    // e.target.value

    const [state, setState] = useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    // let todos = ["html", "css", "js", "react", "express"];

    const [todos, setTodos] = useState(["html", "css", "js", "react", "express"]);
    const [completedTodos, setCompletedTodos] = useState([]);

    function addNewTodo(event) {
        let newTodo = event.target.title.value
        // Form's default nature is to reload. This below code will prevent it to reload
        event.preventDefault(); //Stops page refresh

        let temp = [...todos]
        temp.push(newTodo);
        setTodos(temp)
        event.target.title.value = "";

    }

    function completeTodo(index) {
        let filteredItems = todos.filter((el, idx) => {
            let temp = [...completedTodos];
            if(index == idx) {
                temp.push(todos[index]);
                setCompletedTodos(temp);
                return false;
            }
            return true
        });
        setTodos(filteredItems);
        // console.log(completedTodos);
    }

    function unCompletedTodo(index) {
        let filteredItems = completedTodos.filter((el, idx) => {
            let temp = [...todos];
            if(index == idx) {
                temp.push(completedTodos[index]);
                setTodos(temp);
                return false;
            }
            return true
        });
        setCompletedTodos(filteredItems);
        // console.log("todos",todos);
    }


    return (
        <>
            <br />
            <hr />
            <div>TodoList </div>
            <input type="text" value={state} onChange={handleChange} />
            <p>User is typing: {state}</p>

            <form onSubmit={addNewTodo}>
                <input type="text" name="title" />
                <button>add new todo</button>
            </form>

            <hr />
            <h3>Uncompleted Todos</h3>
            <ul style={{ listStyleType: "none" }}>
                {
                    todos.map((todo, index) => {
                        return <li key={index}> <input type="checkbox" checked={false} onChange={() => { completeTodo(index) }} />{todo}</li>
                    })
                }
            </ul>

            <hr />
            <h3>Completed Todos</h3>
            <ul style={{listStyleType: "none"}}>
                {
                    completedTodos.map((comTodo, ind) => {
                        return <li key={ind}><input type="checkbox" checked={false} onChange={() => {unCompletedTodo(ind)}}/>{comTodo}</li>
                    })
                }
            </ul>

        </>
    )
}