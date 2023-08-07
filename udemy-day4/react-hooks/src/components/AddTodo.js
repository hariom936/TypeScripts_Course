import React, { useState } from 'react'

const AddTodo = ({ handleAddTodo }) => {
  const [todos, setTodos] = useState("");

  const handleInputChange = (event) => {
    setTodos(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(todos);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo </label>
        <input
          id='todo'
          type="text"
          onChange={(event) => handleInputChange(event)}
        />
        <button type='submit'>ADD TODO</button>
      </form>
    </div>
  )
}

export default AddTodo;
