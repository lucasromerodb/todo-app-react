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
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleRemoveTodo(index) {
    console.log(index);
    if (window.confirm('Are your sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((todo, i) => {
          return i !== index
        })
      })
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
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveTodo.bind(this, i)}>Remove</button>
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
            <TodoForm onAddTodo={this.handleAddTodo} />
          </div>
        </div>
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
