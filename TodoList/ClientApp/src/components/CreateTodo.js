import React, { Component } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

export default class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: 'foo',
      assignee: 'fido'
    }
  }
  handleSubmit = async event => {
    event.preventDefault()

    console.log('handling submt')

    const res = await axios.post('/api/todo', {
      taskName: this.state.taskName,
      assignee: this.state.assignee
    })
    console.log(res.data)
    this.props.handleNewTodos(res.data)
  }

  handleChange = event => {
    event.preventDefault()
    console.log('event value', event.target.value)
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <TodoForm
        handleSubmit={this.handleSubmit}
        taskName={this.state.taskName}
        handleChange={this.handleChange}
        assignee={this.state.assignee}
      />
    )
  }
}
