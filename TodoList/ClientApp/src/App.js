// import React, { Component } from 'react'
// import { Route } from 'react-router'
// import { Layout } from './components/Layout'
// import { Home } from './components/Home'
// import { FetchData } from './components/FetchData'
// import { Counter } from './components/Counter'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'
import axios from 'axios'

export default class App extends Component {
  static displayName = App.name
  render() {
    axios.get('api/SampleData/WeatherForecasts').then(res => {
      console.log('data from axios: ' + res.data)
    })
    return (
      <div id="main">
        <h1>Todos</h1>
        <Route exact path="/" component={Todos} />
        <Route path="/todos/:todoId" component={SingleTodo} />
      </div>
    )
  }
}
