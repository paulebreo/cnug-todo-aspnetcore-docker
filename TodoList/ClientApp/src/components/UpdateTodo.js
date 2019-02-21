import React, { Component } from 'react'
import TodoForm from './TodoForm'
import axios from 'axios'

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      assignee: '',
      warningMessage: '',
      initialized: false,
      errorMessage: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('>>>mounted', this.props.todo)
    this.setState({
      taskName: this.props.todo.taskName,
      assignee: this.props.todo.assignee,
      warningMessage: 'Field is required!'
    })
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  async handleSubmit(evt) {
    evt.preventDefault()
    const todoId = this.props.todo.id
    try {
      const res = await axios.put(`/api/todos/${todoId}`, this.state)
      if (res.status === 201) {
        this.props.updateTodo(res.data)
      } else {
        this.setState({ errorMessage: `There was a problem updating the todo` })
      }
    } catch (error) {
      this.setState({
        errorMessage: `There was a problem updating the todo: ${error.message}`
      })
    }
  }

  render() {
    // console.log('the props in render', this.props)
    return (
      <TodoForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
