import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo';
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Learn React Hooks" },
    { id: 2, name: "Make a ReactJS Project" },
    { id: 3, name: "Drink more water" },
    { id: 4, name: "Complete Typescript Training" },
  ]);

  const [count, setCount] = useState(0);

  const handleAddTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Math.random(), name: todo }
    ]);
  }

 
  useEffect(() => {
    console.log("useEffect hook", todos)
  }, [todos])

 
  useEffect(() => {
    console.log("useEffect hook", count)
  }, [count])

  return (
    <div className="container">
      <ul className="myUL">
        {todos.map((item) => {
          return (
            <li key={item.id}>{item.name}</li>
          )
        })}
      </ul>
      <AddTodo handleAddTodo={handleAddTodo} /><br />
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </div>
  )
}

export default TodoList;
