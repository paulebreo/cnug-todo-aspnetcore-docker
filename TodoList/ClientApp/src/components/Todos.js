import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'
// import { Z_UNKNOWN } from "zlib";

export default class Todos extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  handleNewTodos = newTodo => {
    console.log('New todo from child', newTodo)
    this.setState({
      todos: [newTodo, ...this.state.todos]
    })
  }

  handleDeleteTodos = async event => {
    const id = event.target.value
    let newTodos
    const res = await axios.delete(`/api/todos/${id}`)
    if (res.status === 204) {
      newTodos = this.state.todos.filter(todo => todo.id !== parseInt(id))
    }
    this.setState({ todos: newTodos })
  }

  async componentDidMount() {
    const res = await axios.get('/api/todos')
    this.setState({ todos: res.data })
  }

  render() {
    return (
      <div id="todos">
        <CreateTodo handleNewTodos={this.handleNewTodos} />

        {this.state.todos.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            handleDeleteTodos={this.handleDeleteTodos}
          />
        ))}
      </div>
    )
  }
}
