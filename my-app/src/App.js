import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {

    const myTodos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h4>{todo.title}</h4>
              <span className="badge badge-pill badge-primary ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
            </div>
            <div className="card-footer">
              <mark>{todo.responsible}</mark>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="App de tareas" tasks={this.state.todos.length} />
        <div className="container">
          <div className="row mt-4">
            {myTodos}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
