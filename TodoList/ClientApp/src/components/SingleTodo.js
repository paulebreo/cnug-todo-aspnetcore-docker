import React, { Component } from 'react'
import Todo from './Todo'
import UpdateTodo from './UpdateTodo'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleTodo extends Component {
  constructor() {
    super()
    this.state = {
      todo: {}
    }
  }

  async componentDidMount() {
    const todoId = this.props.match.params.todoId
    const res = await axios.get(`/api/todo/${todoId}`)
    this.setState({ todo: res.data })
  }

  updateTodo = todo => {
    console.log('calling update todo from child')
    this.setState({ todo })
  }

  render() {
    const todo = this.state.todo
    console.log('todo in singletodo render', todo)

    return (
      <div id="single-todo">
        <Todo todo={todo} />
        {this.state.todo.id && (
          <UpdateTodo todo={todo} updateTodo={this.updateTodo} />
        )}
        <Link to="/">Back</Link>
      </div>
    )
  }
}
