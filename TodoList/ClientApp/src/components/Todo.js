import React from 'react'
import { Link } from 'react-router-dom'

const Todo = props => {
  const todo = props.todo

  return (
    <div className="todo row" key={todo.id}>
      <div className="column">
        <Link to={`/todos/${todo.id}`}>
          <h3>{todo.taskName}</h3>
        </Link>
        <p>Assigned to: {todo.assignee}</p>
      </div>
      <div className="column">
        <button
          value={todo.id}
          className="remove"
          onClick={props.handleDeleteTodos}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Todo
